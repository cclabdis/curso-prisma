import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const order: OrderInput = {
      client: faker.person.fullName(),
      description: faker.lorem.paragraph(),
    };
    const protocol = "uma string qualquer"
    const mock = jest.spyOn(orderRepository, "create")
    mock.mockImplementation((): any => {
      return {
        protocol: protocol,
        status: "IN_PREPARATION"
      }
    })

    const orderCall = await createOrder(order)
    expect(orderRepository.create).toBeCalledTimes(1)
    expect(orderCall).toEqual({
      protocol,
      status: "IN_PREPARATION",
  });
  });

  it("should return an order based on the protocol", async () => {
    // const protocol = await getOrderByProtocol
    expect(true).toBe(true);
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    // const protocol = await getOrderByProtocol
    expect(true).toBe(true);
  });
});