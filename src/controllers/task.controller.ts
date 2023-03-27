import { FastifyReply, FastifyRequest } from "fastify";
import { Task } from "../schemas/Task.schema";
import {
  createTask,
  deleteTask,
  findTask,
  findTasks,
  updateTask,
} from "../services/task.service";

const addTaskHandler = async (
  req: FastifyRequest<{
    Body: Task;
  }>,
  res: FastifyReply
) => {
  try {
    const task = await createTask(req.body);

    return res.code(201).send({ task });
  } catch (error) {
    console.log(error);
  }
};
const deleteTaskHandler = async () => {};
const updateTaskHandler = async (
  req: FastifyRequest<{
    Body: Task;
  }>,
  res: FastifyReply
) => {
  const task = await updateTask(req.body);
};
const getTaskHandler = async (
  req: FastifyRequest<{
    Params: {
      id: string;
    };
  }>,
  res: FastifyReply
) => {
  const { id } = req.params;

  try {
    const task = await findTask(id);

    res.code(200).send(task);
  } catch (error) {
    res.code(500).send("some thing is wrong");
  }
};

const getAllHandler = async (req: FastifyRequest, res: FastifyReply) => {
  try {
    const tasks = await findTasks();

    return res.code(200).send(tasks);
  } catch (error) {}
};

export {
  addTaskHandler,
  deleteTaskHandler,
  updateTaskHandler,
  getTaskHandler,
  getAllHandler,
};
