import crypto from "crypto";

export function generateRandomString(bytes: number = 32) {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    return crypto.randomBytes(bytes).toString("hex");
  }
  const array = new Uint8Array(bytes);
  crypto.getRandomValues(array);
  let result = "";
  for (let i = 0; i < array.length; i += 1) {
    result += array[i].toString(16).padStart(2, "0");
  }
  return result;
}
