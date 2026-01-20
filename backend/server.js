const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
require("dotenv").config();

const app = express();

const connectionString = `${process.env.DATABASE_URL}`;

const pool = new Pool({
  connectionString,
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 10000, // Return an error after 10 seconds if connection could not be established
  ssl: {
    rejectUnauthorized: false, // Required for Neon
  },
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Doptor Backend is running");
});

// Manual Waitlist Registration
app.post("/api/waitlist", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: "Name and Email are required" });
    }

    const existing = await prisma.waitlistEntry.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const entry = await prisma.waitlistEntry.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    res.status(201).json(entry);
  } catch (error) {
    console.error("Waitlist Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get Stats (for Hero section)
app.get("/api/stats", async (req, res) => {
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

    res.json({ total, recentUsers });
  } catch (error) {
    console.error("Stats Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
