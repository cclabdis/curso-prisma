import { faker } from "@faker-js/faker";
import { generateProtocolForPacient } from "../../src/protocols-generator";

jest.mock('uuid', () => ({
  v4: () => 'voucher gerado por mock' //uma string qualquer
}))

describe("generateProtocolForPacient", () => {
  it("protocol for pacient", async () => {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const priority = faker.datatype.boolean()


    const protocol = generateProtocolForPacient(firstName, lastName, priority)
    expect(protocol).toEqual({

      priority,
      pacient: `${firstName} ${lastName}`,
      date: expect.any(Date),
      protocol: 'voucher gerado por mock'
    });
  });
});

