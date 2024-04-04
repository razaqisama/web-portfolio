import { updateSession } from "@/lib/auth/updateSession";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  return updateSession(req);
}

export const config = {
  matcher: ["/dashboard", "/write", "/blog/:slug/edit"],
};
