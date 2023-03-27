import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createUserHandler } from "../controllers/user.controller";

export function UserdRout(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.post("/", createUserHandler);
  done();
}
