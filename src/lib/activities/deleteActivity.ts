"use server";

import { db } from "@/database";
import { activities as activityTable } from "@/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteActivity(id: string) {
  try {
    const [activity] = await db
      .delete(activityTable)
      .where(eq(activityTable.id, id))
      .returning();

    revalidatePath("/dashboard/activity");

    return {
      data: {
        deletedId: activity.id,
      },
      message: "Berhasil menghapus aktivitas.",
    };
  } catch (err) {
    // console.log(err);
    return {
      data: undefined,
      message: "Terdapat kesalahan saat menghapus aktivitas.",
    };
  }
}
