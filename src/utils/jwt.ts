import { config } from "@/config";
import { JWTPayload, SignJWT, jwtVerify } from "jose";

export async function encryptJWT(payload: JWTPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h from now")
    .sign(config.app.auth.secret);
}

export async function decryptJWT(input: string) {
  const { payload } = await jwtVerify(input, config.app.auth.secret, {
    algorithms: ["HS256"],
  });

  return payload;
}
