import { FastifyReply, FastifyRequest } from "fastify";
import { createUserInput, loginUserInput } from "../schemas/user.schema";
import {
  createUser,
  findUserByEmail,
  verifyPassword,
} from "../services/user.service";
import { createTokens } from "../utils/access&refreshToken";

export async function createUserHandler(
  req: FastifyRequest<{
    Body: createUserInput;
  }>,
  res: FastifyReply
) {
  try {
    const user = await createUser(req.body);
    if (!user) {
      return res.send("something is wrong try again later");
    }
    console.log(user);

    return res.send(user);
  } catch (error) {}
}

export async function loginHandler(
  req: FastifyRequest<{
    Body: loginUserInput;
  }>,
  res: FastifyReply
) {
  const user = await findUserByEmail(req.body.email);
  if (!user) return res.code(403).send("invalide email or password");

  const isValid = await verifyPassword(req.body.password, user.password);

  if (!isValid) return res.code(403).send("invalide email or password");

  const { refreshToken, accessToken } = await createTokens(user);
  res.setCookie("accessToken", accessToken, {
    httpOnly: true,
  });
}
