"use server";

import { db } from "@/database";
import { media as mediaTables } from "@/database/schema";
import { generateRandomString } from "@/utils/generateRandomString";
import { revalidatePath } from "next/cache";
import { getSignedURL } from "./getSignedURL";

async function computeSHA256(file: File) {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

type MediaType = "image";

export async function uploadMedia(form: FormData) {
  const payload = {
    name: form.get("name") as string,
    file: form.get("file") as File,
    contentType: form.get("contentType") as MediaType,
  };

  try {
    const checksum = await computeSHA256(payload.file);
    const signedURL = await getSignedURL(
      payload.name,
      payload.file.type,
      payload.file.size,
      checksum,
    );

    if (signedURL.data) {
      const response = await fetch(signedURL.data.url, {
        method: "PUT",
        body: payload.file,
        headers: {
          "Content-Type": payload.file.type,
        },
      });

      if (response.ok) {
        const newMedia = {
          id: generateRandomString(16),
          name: signedURL.data.name,
          type: payload.contentType,
          url: signedURL.data.url.split("?")[0],
        };

        const [result] = await db
          .insert(mediaTables)
          .values(newMedia)
          .returning();

        revalidatePath("/dashboard/media");

        return {
          data: result,
          message: "Upload file berhasil.",
        };
      }

      throw new Error("Terdapat kesalahan saat upload file.");
    }
    throw new Error(signedURL.error);
  } catch (err) {
    // console.log(err);
    return {
      message: "Terdapat kesalahan saat upload file.",
      data: "",
    };
  }
}
