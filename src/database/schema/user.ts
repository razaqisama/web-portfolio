import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").notNull().primaryKey(),
  username: text("username").unique().notNull(),
  passwordHash: text("password_hash").notNull(),
});
