import { Router } from "express";
import { handleGoogleCallback } from "../controllers/authController";

const router = Router();

router.post("/google/callback", handleGoogleCallback);

export default router;
