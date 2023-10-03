import calculator from "calculator";

function generateValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

describe("calculator unit test suite", () => {
  it("should work", async () => {
    const value1 = generateValue(2, 10);
    const value2 = generateValue(2, 10);
    const result = calculator.sum(value1, value2)
    expect(result).toBe(value1 + value2);
  });

  it("should work", async () => {
    const value1 = generateValue(2, 10);
    const value2 = generateValue(2, 10);
    const result = calculator.div(value1, value2)
    expect(result).toBe(value1 / value2);
  });

  it("should work", async () => {
    const value1 = generateValue(2, 10);
    const value2 = generateValue(2, 10);
    const result = calculator.mul(value1, value2)
    expect(result).toBe(value1 * value2);
  });

  it("should work", async () => {
    const value1 = generateValue(2, 10);
    const value2 = generateValue(2, 10);
    const result = calculator.sub(value1, value2)
    expect(result).toBe(value1 - value2);
  });

})