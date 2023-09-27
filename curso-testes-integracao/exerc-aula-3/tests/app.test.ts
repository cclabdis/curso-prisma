//suite de testes

import calculator from "calculator";

describe("teste com contas de matematicas", () => {
    it("should return sum", () => {
        const result = calculator.sum(2,1)
        expect(result).toBe(3);
    });

    it("should return sub", () => {
        const result = calculator.sub(2,1)
        expect(result).toBe(1); 
    });

    it("should return mull", () => {
        const result = calculator.mul(2,1)
        expect(result).toBe(2); 
    });

    it("should return div", () => {
        const result = calculator.div(2,1)
        expect(result).toBe(2); 
    });
});