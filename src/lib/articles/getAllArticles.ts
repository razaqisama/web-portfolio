"use server";

import { db } from "@/database";
import { articles as articlesTable } from "@/database/schema";
import { sql } from "drizzle-orm";

export async function getAllArticles() {
  try {
    const articles = await db
      .select()
      .from(articlesTable)
      .where(sql`${articlesTable.status} = "published"`);

    return {
      message: "",
      data: articles,
      error: undefined,
    };
  } catch (err) {
    return {
      message: "Terdapat Kesalahan Dalam Mengambil Data Article",
      data: undefined,
      error: err,
    };
  }
}
