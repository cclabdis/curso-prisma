import { group } from "console";
import prisma from "./database";


async function count() {
  const users = await prisma.student.groupBy({
    by: ["class"],
    _count: {_all: true}
  })
}

async function findEmployees() {
  const users = await prisma.student.findMany({
    where:{
      jobId: null
    },
    orderBy: {class: "desc"}
  })
}

(async () => {
  const students = null; // TODO: Faça a implementação aqui
  console.log(students);
})