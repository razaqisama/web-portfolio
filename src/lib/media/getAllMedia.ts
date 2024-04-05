"use server";

import { db } from "@/database";
import { media as mediaTable } from "@/database/schema";

export async function getAllMedia() {
  try {
    const articles = await db.select().from(mediaTable);

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
