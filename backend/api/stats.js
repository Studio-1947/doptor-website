import prisma from "../lib/prisma.js";
import allowCors from "../lib/cors.js";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const userCount = await prisma.user.count();
      const waitlistCount = await prisma.waitlistEntry.count();
      const total = userCount + waitlistCount + 500; // +500 base as per design

      // Get recent avatars (from User table only, as WaitlistEntry has no image)
      const recentUsers = await prisma.user.findMany({
        take: 5,
        select: { image: true },
        orderBy: { createdAt: "desc" },
      });

      return res.json({ total, recentUsers });
    } catch (error) {
      console.error("Stats Error:", error);
      return res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default allowCors(handler);
