import supertest from "supertest";

import app from "./../src/app";
import prisma from "../src/database";

const api = supertest(app);

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("POST /users tests", () => {
  it("should create a user", async () => {
    const { status } = await api.post("/users").send({
      email: "lalalaala@lala.com.br",
      password: "1234"

    })
    expect(status).toBe(201)

  });

  it("should receive 409 when trying to create two users with same e-mail", async () => {
    await api.post("/users").send({
      email: "lalalaala@lala.com.br",
      password: "1234"

    })
    const { status } = await api.post("/users").send({
      email: "lalalaala@lala.com.br",
      password: "1234dfsfd"

    })
    expect(status).toBe(409)
  });

});

describe("GET /users tests", () => {
  it("should return a single user", async () => {
    const user = await api.post("/users").send({
      email: "lalalaala@lala.com.br",
      password: "1234dfsfd"

    })
    // TODO
  });

  it("should return 404 when can't find a user by id", async () => {
    // TODO
  });

  it("should return all users", async () => {
    // TODO
  });

})