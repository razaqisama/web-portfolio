"use server";

import { decryptJWT, encryptJWT } from "@/utils/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function updateSession(req: NextRequest) {
  const session = req.cookies.get("session")?.value;

  if (!session) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  const parsed = await decryptJWT(session);
  const expires = new Date(Date.now() + 60 * 60 * 1000);
  parsed.expires = expires;

  const res = NextResponse.next();

  res.cookies.set({
    name: "session",
    value: await encryptJWT(parsed),
    httpOnly: true,
    expires,
  });

  return NextResponse.next();
}
