/* eslint-disable import/no-extraneous-dependencies */
import { config } from "@/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schema",
  driver: "turso",
  dbCredentials: {
    url: config.db.url,
    authToken: config.db.authToken,
  },
  out: "./drizzle",
});
