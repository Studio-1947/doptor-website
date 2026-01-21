import { Router } from "express";
import { createWaitlistEntry } from "../controllers/waitlistController";
import { getWaitlistStats } from "../controllers/statsController";

const router = Router();

router.post("/", createWaitlistEntry);
router.get("/stats", getWaitlistStats);

export default router;
