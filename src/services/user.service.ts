import { createUserInput } from "../schemas/user.schema";
import prisma from "../utils/prisma";
import bcrypt from "bcrypt";
export async function createUser(user: createUserInput) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  return prisma.user.create({
    data: {
      ...user,
      password: hash,
    },
  });
}

export async function findUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
}

export async function verifyPassword(condidatePassword: string, hash: string) {
  const isValid = await bcrypt.compare(condidatePassword, hash);

  return isValid;
}
