import prisma from "database/database";

(async () => {
  const result = await prisma.cakes.count()

  const posts = result;
  console.log("Posts encontrados no banco:", posts);
})();