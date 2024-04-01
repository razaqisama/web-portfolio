"use server";

import { db } from "@/database";
import { users as usersTable } from "@/database/schema/user";
import { ValidationError } from "joi";
import { sql } from "drizzle-orm";
import { comparePasswords } from "@/utils/bcrypt";
import { encryptJWT } from "@/utils/jwt";
import { cookies } from "next/headers";
import { AuthValidations } from "./validations";

interface RegisterPayload {
  username: string;
  password: string;
}

export async function login(payload: RegisterPayload) {
  const loginUser = {
    username: payload.username,
    password: payload.password,
  };

  try {
    const { error } = AuthValidations.login().validate(loginUser);

    if (error) {
      throw error;
    }

    const [user] = await db
      .select()
      .from(usersTable)
      .where(sql`${usersTable.username} = ${loginUser.username}`);

    const isPasswordValid = await comparePasswords(
      loginUser.password,
      user.passwordHash,
    );

    if (!isPasswordValid) {
      throw new Error("Username atau password anda salah");
    }

    const expires = new Date(Date.now() + 60 * 60 * 1000);
    const session = await encryptJWT({
      user: {
        id: user.id,
        username: user.username,
      },
      expires,
    });

    cookies().set("session", session, { expires, httpOnly: true });

    return {
      message: "Berhasil Login",
      data: {
        id: user.id,
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
      message: error.message,
      data: undefined,
    };
  }
}
