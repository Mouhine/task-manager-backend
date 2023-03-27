import fastify from "fastify";
import { TaskRout } from "./routes/Task.routes";
import { createServer } from "./utils/createServer";

async function startServer() {
  const app = await createServer();
  app.listen({
    port: 5000,
    host: "0.0.0.0",
  });
}

startServer();
