import { PrismaClient } from "@prisma/client";
import { Task } from "../schemas/Task.schema";
const prisma = new PrismaClient();

const createTask = async (body: Task) => {
  try {
    const task = await prisma.task.create({
      data: {
        title: body.title,
        description: body.description,
        subTasks: {
          create: body.subTasks,
        },
      },
    });

    return task;
  } catch (error) {}
};

const deleteTask = async (id: string) => {
  await prisma.task.delete({
    where: {
      id,
    },
  });
  return true;
};

const updateTask = async (update: Task) => {
  console.log(update, "update");
  return prisma.task.update({
    data: {
      ...update,
      subTasks: {
        updateMany: {
          where: {
            taskId: update.id,
          },
          data: [...(update.subTasks as [])],
        },
      },
    },
    where: {
      id: update.id,
    },
  });
};

const findTask = async (id: string) => {
  const task = await prisma.task.findFirst({
    where: {
      id,
    },
    include: {
      subTasks: true,
    },
  });
  return task;
};

const findTasks = async () => {
  return prisma.task.findMany({
    include: {
      subTasks: true,
    },
  });
};

export { createTask, findTask, findTasks, deleteTask, updateTask };
