import { array } from "joi";
import app from "./../src/app";
import supertest from "supertest";

const server = supertest(app)
//suite de testes
describe("api", () => {
    it("/health", async () => {
        const result = await server.get("/health")
        const { statusCode } = result
        expect(statusCode).toBe(200); //matchers
    });

    it("/numbers", async () => {
        const result = await server.get("/numbers")
        expect(result.statusCode).toBe(200);
        expect(result.body).toHaveLength(5)
        expect(result.body).toEqual([1, 2 , 3, 4, 5]); //matchers
        expect(result.body).toContain(3)
        expect(result.body).toEqual(expect.arrayContaining([1, 3]))
    });

    //objetos
    it("/numbers", async () => {
        const result = await server.get("/numbers/:test")
        expect(result.statusCode).toBe(200);
        expect(result.body).toHaveLength(5)
        expect(result.body).toEqual({estrutura: 0, de: 1, array:2}); 
        expect(result.body).toEqual({estrutura: 0, de: 1, array: expect.any(Number)});//matchers
        expect(result.body).toMatchObject({estrutura: 0, de: 1});
        expect(result.body).toContain(3)
        expect(result.body).toEqual(expect.arrayContaining([1, 3]))
    });

    it("/numbers", async () => {
        const result = await server.get("/numbers")
        expect(result.statusCode).toBe(200);
        expect(result.body).toHaveLength(5)
        expect(result.body).toEqual([1, 2 , 3, 4, 5]); //matchers
        expect(result.body).toContain(3)
        expect(result.body).toEqual(expect.arrayContaining([1, 3]))
    });

    
});