import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const media = sqliteTable("media", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
  type: text("type", { enum: ["image"] }).notNull(),
  url: text("url").notNull(),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
