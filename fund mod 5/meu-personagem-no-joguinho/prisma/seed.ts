import prisma from "./../database";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "user@gmail.com",
      firstName: "user",
      lastName: "user"
    }
  })

  const character = await prisma.character.create({
    data: {
      name: "characterfromuser",
      userId: user.id,
      class: "user",
      description: "it's a user"
    }
  })
}

main().catch(e => {
  console.log(e);
  process.exit(1);
}).finally(async () => {
  await prisma.$disconnect();
})