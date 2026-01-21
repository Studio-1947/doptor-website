import express from "express";
import dotenv from "dotenv";
import { corsMiddleware } from "./middleware/cors";
import routes from "./routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(corsMiddleware);
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Doptor Backend is running");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
