import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";
import {
  addTaskHandler,
  deleteTaskHandler,
  getTaskHandler,
  getAllHandler,
  updateTaskHandler,
} from "../controllers/task.controller";
export function TaskRout(
  app: FastifyInstance,
  options: FastifyPluginOptions,
  done: () => void
) {
  app.get("/fuck", async function () {
    return "mohammed mouhine";
  });
  app.get("/", getAllHandler);
  app.post("/", addTaskHandler);
  app.get("/:id", getTaskHandler);
  app.delete("/:id", deleteTaskHandler);
  app.put("/:id", updateTaskHandler);
  done();
}
