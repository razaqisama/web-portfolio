import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const articles = sqliteTable("articles", {
  id: text("id").notNull().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  slug: text("slug").unique().notNull(),
  status: text("status", { enum: ["draft", "published"] }).notNull(),
  publishedAt: text("publishedAt"),
  createdAt: text("createdAt")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
