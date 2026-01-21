import { Request, Response } from "express";
import { db } from "../db";
import { waitlistEntries } from "../db/schema";
import { eq } from "drizzle-orm";

export const createWaitlistEntry = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!email || !name) {
      return res.status(400).json({ error: "Name and email are required" });
    }

    const existingEntry = await db.query.waitlistEntries.findFirst({
      where: eq(waitlistEntries.email, email),
    });

    if (existingEntry) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const [entry] = await db
      .insert(waitlistEntries)
      .values({
        name,
        email,
        phone,
        message,
      })
      .returning();

    res.status(201).json(entry);
  } catch (error) {
    console.error("Error creating waitlist entry:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
