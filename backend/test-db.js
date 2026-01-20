require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("✅ Database connection successful!");
    const result = await client.query("SELECT NOW()");
    console.log("Server time:", result.rows[0].now);
    client.release();
    process.exit(0);
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error(error.message);
    process.exit(1);
  }
}

testConnection();
