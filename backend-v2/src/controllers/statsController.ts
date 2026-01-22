import { Request, Response } from "express";
import { db } from "../db";
import { users, waitlistEntries } from "../db/schema";
import { count, desc } from "drizzle-orm";

export const getWaitlistStats = async (req: Request, res: Response) => {
  try {
    const [userCountResult] = await db.select({ count: count() }).from(users);
    const [waitlistCountResult] = await db
      .select({ count: count() })
      .from(waitlistEntries);

    const userCount = userCountResult?.count || 0;
    const waitlistCount = waitlistCountResult?.count || 0;
    const total = userCount + waitlistCount + 500; // +500 base as per design

    // Get recent users from both tables
    const recentGoogleUsers = await db
      .select({
        name: users.name,
        image: users.image,
        createdAt: users.createdAt,
      })
      .from(users)
      .orderBy(desc(users.createdAt))
      .limit(5);

    const recentWaitlistUsers = await db
      .select({
        name: waitlistEntries.name,
        createdAt: waitlistEntries.createdAt,
      })
      .from(waitlistEntries)
      .orderBy(desc(waitlistEntries.createdAt))
      .limit(5);

    // Merge and sort
    const allRecent = [
      ...recentGoogleUsers.map((u) => ({
        ...u,
        initials: u.name ? u.name.charAt(0).toUpperCase() : "?",
        source: "google",
      })),
      ...recentWaitlistUsers.map((u) => ({
        ...u,
        image: null,
        initials: u.name ? u.name.charAt(0).toUpperCase() : "?",
        source: "waitlist",
      })),
    ]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5);

    return res.json({ total, recentUsers: allRecent });
  } catch (error) {
    console.error("Stats Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
