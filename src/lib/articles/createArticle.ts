"use server";

import { db } from "@/database";
import { articles } from "@/database/schema";
import { generateRandomString } from "@/utils/generateRandomString";
import { ValidationError } from "joi";
import { revalidatePath } from "next/cache";
import { ArticlesValidation } from "./validations";

export interface ArticlePayload {
  title: string;
  content: string;
  description: string;
  slug: string;
  status: "published" | "draft";
  publishedAt: string | null;
}

export async function createArticle(payload: ArticlePayload) {
  // TODO: Add Authentication for this.

  const newArticle = {
    id: generateRandomString(16),
    title: payload.title,
    description: payload.description,
    content: payload.content,
    slug: payload.slug,
    status: payload.status,
    publishedAt: payload.publishedAt,
  };

  try {
    const { error } = ArticlesValidation.create().validate(newArticle);

    if (error) {
      throw error;
    }

    const [result] = await db.insert(articles).values(newArticle).returning();

    revalidatePath("/blog");

    return {
      message: "Berhasil Menambahkan Article",
      data: {
        slug: result.slug,
      },
    };
  } catch (err) {
    const error = err as ValidationError;

    if (error.details?.[0].message) {
      return {
        message: error.details[0].message,
        data: undefined,
      };
    }

    return {
      message: "Terdapat kesalahan dalam membuat artikel. Mohon hubungi admin",
      data: undefined,
    };
  }
}
