"use server";

import { db } from "@/database";
import { articles } from "@/database/schema";
import { generateRandomString } from "@/utils/generateRandomString";

export interface ArticlePayload {
  title: string;
  content: string;
  description: string;
  slug: string;
}

export async function createArticle(payload: ArticlePayload) {
  // TODO: Add Authentication for this.

  try {
    const [result] = await db
      .insert(articles)
      .values({
        id: generateRandomString(16),
        ...payload,
      })
      .returning();

    return {
      message: "Berhasil Menambahkan Article",
      data: {
        slug: result.slug,
      },
      error: undefined,
    };
  } catch (err) {
    return {
      message: "",
      data: undefined,
      error: err,
    };
  }
}
