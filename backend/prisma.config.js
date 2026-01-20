const { defineConfig, env } = require("prisma/config");
require("dotenv/config");

module.exports = defineConfig({
  datasource: {
    url: env("DATABASE_URL"),
  },
});
