import prisma from "./database";

async function find() {
    const users = await prisma.clients.findMany();
    return users;
}

(async () => {
    const users = await find()
    console.log(users)
})()