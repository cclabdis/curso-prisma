import supertest from "supertest";
import app from "../src/app";
import { cFruit } from "./factories/fruit-factory";



const server = supertest(app)


describe("POST /fruits", () => {
    it("should return 201 when inserting a fruit", async () => {

        const novofruta = cFruit("kiwi", 10)
        console.log(novofruta)
        const { status } = await server.post("/fruits").send(novofruta)


        expect(status).toBe(201)
    })
    it("should return 409 when inserting a fruit that is already registered", async () => {
        const novofruta = cFruit("kiwi", 10)
        await server.post("/fruits").send(novofruta)
        const novafruta2 = cFruit("kiwi", 10)
        const { status } = await server.post("/fruits").send(novafruta2)

        expect(status).toBe(409)
    })
    it("should return 422 when inserting a fruit with data missing", async () => {
        const novafruta2 = cFruit("", 10)
        const { status } = await server.post("/fruits").send(novafruta2)

        expect(status).toBe(422)

    })
})

describe("GET /fruits", () => {
    it("shoud return 404 when trying to get a fruit by an id that doesn't exist", async () => {
        const { status } = await server.get("/fruits/10")
        expect(status).toBe(404)
    })
    it("should return 400 when id param is present but not valid", async () => {
        const { status } = await server.get("/fruits/jalkdaaks0")
        expect(status).toBe(400)
        const { status: stat } = await server.get("/fruits/0")
        expect(stat).toBe(400)
    })
    it("should return one fruit when given a valid and existing id", async () => {
        const novafruta = cFruit("malencia", 20)
        const fruta = await server.post("/fruits").send(novafruta)

        const { body } = await server.get(`/fruits/5`)
        expect(body).toEqual({ "id": body.id, "name": body.name, "price": body.price })


    })

    it("should return all fruits if no id is present", async () => {
        const { status } = await server.get(`/fruits/`)
        expect(status).toBe(200)

    })

}

)