import supertest from "supertest";

import app, { fibonacciSequence } from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
})

describe("API test", () => {
  it("should return 400 when ask /fibonnaci", async () => {
    const { status } = await api.get("/fibonacci");
    expect(status).toBe(400);
  })
})
describe("API test", () => {
  it("should return 200 when ask /fibonnaci", async () => {
    const { status } = await api.get("/fibonacci?elements=1");
    expect(status).toBe(200);
    const result = fibonacciSequence(1)
    expect(result).toEqual([0, 1]);
   
  })
})
