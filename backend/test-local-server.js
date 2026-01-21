import "dotenv/config";
import http from "http";
import apiHandler from "./api/index.js";
import statsHandler from "./api/stats.js";
import waitlistHandler from "./api/waitlist.js";

const server = http.createServer(async (req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);

  // Mock Vercel's req.query and req.body if needed (simple version)
  // For this test, we assume body parsing is handled or not needed for GET
  // But waitlist needs body. Let's add simple body parsing.

  if (req.method === "POST") {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const data = Buffer.concat(buffers).toString();
    try {
      req.body = JSON.parse(data);
    } catch (e) {
      req.body = {};
    }
  }

  if (req.url === "/api" || req.url === "/api/") {
    return apiHandler(req, res);
  } else if (req.url === "/api/stats") {
    return statsHandler(req, res);
  } else if (req.url === "/api/waitlist") {
    return waitlistHandler(req, res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Test server running at http://localhost:${PORT}`);
});
