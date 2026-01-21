import { Router } from "express";
import waitlistRoutes from "./waitlist";
import { getWaitlistStats } from "../controllers/statsController";

const router = Router();

router.use("/waitlist", waitlistRoutes);

router.get("/stats", getWaitlistStats);

export default router;
