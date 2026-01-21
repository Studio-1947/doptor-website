import { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { db } from "../db";
import { users, accounts, waitlistEntries } from "../db/schema";
import { eq } from "drizzle-orm";

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

export const handleGoogleCallback = async (req: Request, res: Response) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({ error: "No credential provided" });
    }

    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    if (!payload || !payload.email) {
      return res.status(400).json({ error: "Invalid token payload" });
    }

    const { email, name, picture, sub: googleId } = payload;

    // Check if user exists
    let user = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    // Create user if doesn't exist
    if (!user) {
      const [newUser] = await db
        .insert(users)
        .values({
          email,
          name: name || "",
          image: picture,
          emailVerified: new Date(),
        })
        .returning();
      user = newUser;

      // Create account record
      await db.insert(accounts).values({
        userId: user.id,
        type: "oauth",
        provider: "google",
        providerAccountId: googleId,
      });
    } else {
      // Update user image if changed
      if (picture && user.image !== picture) {
        await db
          .update(users)
          .set({ image: picture })
          .where(eq(users.id, user.id));
      }
    }

    // Check if waitlist entry exists
    const existingEntry = await db.query.waitlistEntries.findFirst({
      where: eq(waitlistEntries.email, email),
    });

    if (existingEntry) {
      // Update existing entry with userId and image
      await db
        .update(waitlistEntries)
        .set({
          userId: user.id,
          name: name || existingEntry.name,
          image: picture,
        })
        .where(eq(waitlistEntries.email, email));
    } else {
      // Create new waitlist entry
      await db.insert(waitlistEntries).values({
        userId: user.id,
        email,
        name: name || "",
        image: picture,
      });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
      },
    });
  } catch (error) {
    console.error("Error in Google OAuth callback:", error);
    res.status(500).json({ error: "Authentication failed" });
  }
};
