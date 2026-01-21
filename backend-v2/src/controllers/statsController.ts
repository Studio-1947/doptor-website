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

    // Get recent avatars (from User table only, as WaitlistEntry has no image)
    const recentUsers = await db
      .select({
        image: users.image,
        name: users.name,
      })
      .from(users)
      .orderBy(desc(users.createdAt))
      .limit(5);

    return res.json({ total, recentUsers });
  } catch (error) {
    console.error("Stats Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
