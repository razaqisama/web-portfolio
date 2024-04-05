import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const activities = sqliteTable("activities", {
  id: text("id").notNull().primaryKey(),
  title: text("name").notNull(),
  date: text("date").notNull(),
  linkTo: text("linkTo"),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
