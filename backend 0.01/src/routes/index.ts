import { Router } from "express";
import waitlistRoutes from "./waitlist";
import authRoutes from "./auth";

const router = Router();

router.use("/waitlist", waitlistRoutes);
router.use("/auth", authRoutes);

router.get("/stats", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

export default router;
