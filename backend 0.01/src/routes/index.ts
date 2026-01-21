import { Router } from "express";
import waitlistRoutes from "./waitlist";

const router = Router();

router.use("/waitlist", waitlistRoutes);

router.get("/stats", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

export default router;
