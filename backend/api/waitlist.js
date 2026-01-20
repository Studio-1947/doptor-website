import prisma from "../lib/prisma.js";
import allowCors from "../lib/cors.js";

const handler = async (req, res) => {
  if (req.method === "POST") {
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

      return res.status(201).json(entry);
    } catch (error) {
      console.error("Waitlist Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default allowCors(handler);
