"use server";

import { config } from "@/config";
import { db } from "@/database";
import { media as mediaTable } from "@/database/schema";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { s3 } from "./s3";

export async function deleteMedia(id: string) {
  try {
    const [media] = await db
      .delete(mediaTable)
      .where(eq(mediaTable.id, id))
      .returning();

    const cmd = new DeleteObjectCommand({
      Bucket: config.aws.s3.name,
      Key: media.url.split("/").pop(),
    });

    await s3.send(cmd);

    revalidatePath("/dashboard/media");

    return {
      data: {
        deletedId: media.id,
      },
      message: "Berhasil menghapus media file.",
    };
  } catch (err) {
    // console.log(err);
    return {
      data: undefined,
      message: "Terdapat kesalahan saat delete media file.",
    };
  }
}
