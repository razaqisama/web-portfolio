import { compare, genSalt, hash } from "bcrypt";

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Salt rounds for bcrypt
  const salt = await genSalt(saltRounds);
  return hash(password, salt);
}

export async function comparePasswords(
  providedPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return compare(providedPassword, hashedPassword);
}
