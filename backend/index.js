import allowCors from "./lib/cors.js";

const handler = async (req, res) => {
  res.status(200).send("Doptor Backend Service is Running");
};

export default allowCors(handler);
