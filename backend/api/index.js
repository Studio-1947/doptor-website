const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const { Pool } = require("pg");
const { PrismaPg } = require("@prisma/adapter-pg");
require("dotenv").config();

const app = express();

// Singleton pattern for Prisma Client to reuse connections across function invocations
let prisma;
let pool;

function getPrismaClient() {
  if (!prisma) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL environment variable is not set");
    }

    // Optimized for serverless: use minimal connections
    pool = new Pool({
      connectionString,
      max: 1, // Serverless functions should use minimal connections
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000,
      ssl: {
        rejectUnauthorized: false, // Required for Neon
      },
    });

    const adapter = new PrismaPg(pool);
    prisma = new PrismaClient({
      adapter,
      log: ["error", "warn"], // Enable logging for debugging
    });
  }
  return prisma;
}

app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("Doptor Backend is running");
});

// Manual Waitlist Registration
app.post("/api/waitlist", async (req, res) => {
  try {
    const prisma = getPrismaClient();
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
    const errorMessage = error.message || "Internal Server Error";
    res.status(500).json({ error: errorMessage });
  }
});

// Get Stats (for Hero section)
app.get("/api/stats", async (req, res) => {
  try {
    const prisma = getPrismaClient();
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
    const errorMessage = error.message || "Internal Server Error";
    res.status(500).json({ error: errorMessage });
  }
});

// Export the Express app as a serverless function
module.exports = app;
