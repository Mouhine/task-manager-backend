import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";

export function BoardRout(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get("/", () => "hello world from board ");
  done();
}
