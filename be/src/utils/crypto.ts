import { createHash } from "crypto";
import { envConfig } from "~/constants/config";

export function sha256(data: string) {
  return createHash("sha256").update(data).digest("hex");
}

export function hashPassword(password: string) {
  return sha256(password + envConfig.passwordSecret);
}
