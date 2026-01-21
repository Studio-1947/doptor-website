import { Request, Response } from "express";
import { db } from "../db";
import { waitlistEntries } from "../db/schema";
import { desc } from "drizzle-orm";

export const getWaitlistStats = async (req: Request, res: Response) => {
  try {
    // Get total count
    const allEntries = await db.query.waitlistEntries.findMany();
    const count = allEntries.length;

    // Get 5 most recent users with images
    const recentEntries = await db.query.waitlistEntries.findMany({
      orderBy: [desc(waitlistEntries.createdAt)],
      limit: 5,
      columns: {
        name: true,
        email: true,
        image: true,
      },
    });

    // Format recent users data
    const recentUsers = recentEntries.map((entry) => ({
      name: entry.name,
      image: entry.image || null,
      initials: entry.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2),
    }));

    res.status(200).json({
      count,
      recentUsers,
    });
  } catch (error) {
    console.error("Error fetching waitlist stats:", error);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
};
