import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { config } from "@/config";

const client = createClient({
  url: config.db.url,
  authToken: config.db.authToken,
});

export const db = drizzle(client);
