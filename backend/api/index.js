import allowCors from "../lib/cors";

const handler = async (req, res) => {
  if (req.method === "GET") {
    res.status(200).send("Doptor Backend is running");
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default allowCors(handler);
