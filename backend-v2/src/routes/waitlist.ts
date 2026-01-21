import { Router } from "express";
import { createWaitlistEntry } from "../controllers/waitlistController";

const router = Router();

router.post("/", createWaitlistEntry);

export default router;
