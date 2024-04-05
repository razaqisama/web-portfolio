"use server";

import { db } from "@/database";
import { activities as activitiesTable } from "@/database/schema";
import { generateRandomString } from "@/utils/generateRandomString";
import { ValidationError } from "joi";
import { revalidatePath } from "next/cache";
import { ActivityValidation } from "./validations";

export interface ActivityPayload {
  title: string;
  date: string;
  linkTo: string;
}

export async function createActivity(payload: ActivityPayload) {
  // TODO: Add Authentication for this.

  const newActivity = {
    id: generateRandomString(16),
    title: payload.title,
    date: payload.date,
    linkTo: payload.linkTo,
  };

  try {
    const { error } = ActivityValidation.create().validate(newActivity);

    if (error) {
      throw error;
    }

    const [result] = await db
      .insert(activitiesTable)
      .values(newActivity)
      .returning();

    revalidatePath("/dashboard/activity");

    return {
      message: "Berhasil Menambahkan Aktifitias Baru",
      data: {
        slug: result.id,
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
      message:
        "Terdapat kesalahan dalam menambahkan aktivitas. Mohon hubungi admin",
      data: undefined,
    };
  }
}
