import { createUserInput } from "../schemas/user.schema";
import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
export async function createTokens(payload: User) {
  //todo
  const accessToken = jwt.sign(payload, process.env.JWT_PRIVATE_KEY as string, {
    algorithm: "ES256",
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(
    payload,
    process.env.JWT_PRIVATE_KEY as string,
    {
      algorithm: "ES256",
      expiresIn: "1y",
    }
  );
  return {
    accessToken,
    refreshToken,
  };
}

export async function asignTokens() {
  //todo
}
