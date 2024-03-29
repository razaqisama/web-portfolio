"use server";

import { db } from "@/database";
import { articles as articlesTable } from "@/database/schema";
import { sql } from "drizzle-orm";

export async function getOneArticleBySlug(slug: string) {
  try {
    const [article] = await db
      .select()
      .from(articlesTable)
      .where(sql`${articlesTable.slug} = ${slug}`);

    return {
      message: "",
      data: article,
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
