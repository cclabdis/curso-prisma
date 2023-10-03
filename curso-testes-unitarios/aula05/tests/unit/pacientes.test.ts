import { generateProtocolForPacient } from "protocols-generator";

jest.mock('uuid', () => ({
  v4: () => 'voucher gerado por mock' //uma string qualquer
}))

describe("generateProtocolForPacient", () => {
  it("protocol for pacient", async () => {
    const protocol = generateProtocolForPacient("Juliana", "Alves", true)
    expect(protocol).toEqual({

      priority: true,
      pacient: "Juliana Alves",
      date: expect.any(Date),
      protocol: expect.any(String)
    });
  });
});

