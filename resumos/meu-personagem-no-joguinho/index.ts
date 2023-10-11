import express, { json, Request, Response } from "express";
import { Character, Prisma, User } from "@prisma/client";
import httpStatus from "http-status";

import prisma from "./database";

const app = express();
app.use(json());

type UserCreate = Omit<User, "id"> & { character: CharacterCreate };
type CharacterCreate = Omit<Character, "id" | "userId">;

app.post("/create", async (req: Request, res: Response) => {
  const userData = req.body as UserCreate;
  try {
    const user = await createUser(userData);
    await createUserCharacter(userData.character, user.id);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Não foi possível finalizar a operação.")
  }
});

// FIXME: Podemos resolver este problema usando a API de transações ou criando uma Nested Write.
async function createUser(user: UserCreate) {
  const { firstName, lastName, email } = user;
  return await prisma.user.create({
    data: {
      firstName,
      lastName,
      email
    },
  })
}

async function createUserCharacter(character: CharacterCreate, userId: number) {
  return await prisma.character.create({
    data: {
      userId,
      ...character
    }
  })
}

app.listen(5000, () => {
  console.log("Server is up and running on port 5000");
})