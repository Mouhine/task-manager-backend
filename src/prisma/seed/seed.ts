import prisma from "../../utils/prisma";
async function clean() {
  await prisma.task.deleteMany();
}

clean();
