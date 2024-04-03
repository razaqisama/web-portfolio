import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").notNull().primaryKey(),
  username: text("username").unique().notNull(),
  passwordHash: text("password_hash").notNull(),
  name: text("name").notNull(),
  birthDate: text("birthDate").default(
    sql`(strftime('%Y-%m-%d', CURRENT_TIMESTAMP))`,
  ),
  profession: text("profession"),
  passion: text("passion"),
  vision: text("vision"),
});
