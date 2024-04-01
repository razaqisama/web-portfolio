"use server";

import { db } from "@/database";
import { users as usersTable } from "@/database/schema/user";
import { hashPassword } from "@/utils/bcrypt";
import { generateRandomString } from "@/utils/generateRandomString";
import { ValidationError } from "joi";
import { AuthValidations } from "./validations";

interface RegisterPayload {
  username: string;
  password: string;
}

export async function register(payload: RegisterPayload) {
  const newUser = {
    id: generateRandomString(16),
    username: payload.username,
    passwordHash: await hashPassword(payload.password),
  };

  try {
    const { error } = AuthValidations.create().validate(newUser);

    if (error) {
      throw error;
    }

    const [result] = await db.insert(usersTable).values(newUser).returning();

    return {
      message: "Berhasil Menambahkan Akun",
      data: {
        id: result.id,
      },
    };
  } catch (err) {
    // console.error(err);

    const error = err as ValidationError;

    if (error.details?.[0].message) {
      return {
        message: error.details[0].message,
        data: undefined,
      };
    }

    return {
      message: "Terdapat Kesalahan Dalam Membuat User Baru",
      data: undefined,
    };
  }
}
