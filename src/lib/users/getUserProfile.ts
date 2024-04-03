"use server";

import { db } from "@/database";
import { users as usersTable } from "@/database/schema";
import { sql } from "drizzle-orm";

export async function getUserProfile(id: string) {
  try {
    const [user] = await db
      .select({
        name: usersTable.name,
        birthDate: usersTable.birthDate,
        profession: usersTable.profession,
        vision: usersTable.vision,
        passion: usersTable.passion,
      })
      .from(usersTable)
      .where(sql`${usersTable.id} = ${id}`);

    return {
      message: "",
      data: user,
      error: undefined,
    };
  } catch (err) {
    return {
      message: "Terdapat Kesalahan Dalam Mengambil Data User",
      data: undefined,
      error: err,
    };
  }
}
