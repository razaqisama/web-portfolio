"use server";

import { db } from "@/database";
import { activities as activitiesTable } from "@/database/schema";

export async function getAllActivities() {
  try {
    const activities = await db.select().from(activitiesTable);

    return {
      message: "",
      data: activities,
      error: undefined,
    };
  } catch (err) {
    return {
      message: "Terdapat Kesalahan Dalam Mengambil Data Activities",
      data: undefined,
      error: err,
    };
  }
}
