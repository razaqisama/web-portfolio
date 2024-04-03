"use server";

import { db } from "@/database";
import { users as usersTable } from "@/database/schema";
import { eq } from "drizzle-orm";
import { ValidationError } from "joi";
import { UserValidation } from "./validations";

interface UpdateUserPayload {
  name: string;
  birthDate: string;
  profession: string;
  passion: string;
  vision: string;
}

export async function updateUserProfile(
  id: string,
  payload: UpdateUserPayload,
) {
  try {
    const { error } = UserValidation.update().validate(payload);

    if (error) throw error;

    const [updatedUser] = await db
      .update(usersTable)
      .set({
        name: payload.name,
        birthDate: payload.birthDate,
        profession: payload.profession,
        passion: payload.passion,
        vision: payload.vision,
      })
      .where(eq(usersTable.id, id))
      .returning({
        id: usersTable.id,
        name: usersTable.name,
        birthDate: usersTable.birthDate,
        profession: usersTable.profession,
        passion: usersTable.passion,
        vision: usersTable.vision,
      });

    return {
      message: "Berhasil mengubah data profile",
      data: updatedUser,
      error: undefined,
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
