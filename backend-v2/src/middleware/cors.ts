import cors from "cors";

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://doptor-website.vercel.app",
  "https://www.doptor.in",
];

export const corsMiddleware = cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
});
