import { decryptJWT } from "@/utils/jwt";
import { cookies } from "next/headers";

export interface SessionUserInfo {
  id: string;
  username: string;
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return decryptJWT(session);
}
