import fastify from "fastify";
import { BoardRout } from "../routes/board.routes";
import { TaskRout } from "../routes/Task.routes";
import cors from "@fastify/cors";
import { UserdRout } from "../routes/user.routes";
import { FastifyCookieOptions } from "@fastify/cookie";
import cookie from "@fastify/cookie";

export async function createServer() {
  const app = fastify({
    logger: true,
  });
  await app.register(cors, {
    origin: "http://localhost:3000",
  });
  app.register(TaskRout, { prefix: "/api/tasks" });
  app.register(BoardRout, { prefix: "/api/boards" });
  app.register(UserdRout, { prefix: "/api/users" });
  app.register(cookie, {
    secret: process.env.COOKIE_SECRET, // for cookies signature
    parseOptions: {}, // options for parsing cookies
  } as FastifyCookieOptions);

  return app;
}
