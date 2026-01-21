import { Router } from "express";
import waitlistRoutes from "./waitlist";
import authRoutes from "./auth";
import { getWaitlistStats } from "../controllers/statsController";

const router = Router();

router.use("/waitlist", waitlistRoutes);
router.use("/auth", authRoutes);

router.get("/stats", getWaitlistStats);

export default router;
