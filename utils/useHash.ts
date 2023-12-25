import crypto from "crypto";
export function useHash(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 512, 64, "sha512")
    .toString("hex");

  return { salt, hash };
}

export function useHashWithSalt(
  password: string,
  salt: string,
  users_password: string
): boolean {
  const hash = crypto
    .pbkdf2Sync(password, salt, 512, 64, "sha512")
    .toString("hex");

  return hash === users_password;
}
