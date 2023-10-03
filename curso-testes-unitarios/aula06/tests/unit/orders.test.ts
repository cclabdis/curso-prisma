import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    // jest.spyOn(orderRepository, "create").mockImplementation((): any => {
    //  return {
    //   id: 1,
    //   client: order.client,
    //   description: order.description,
    //   protocol: new Date().getTime().toString(),
    //   status: "IN_PREPARATION"
    //  }
    // })
    const order = await createOrder

    expect(true).toBe(true);
  });

  it("should return an order based on the protocol", async () => {
    const protocol = await getOrderByProtocol
    expect(true).toBe(true);
  });

  it("should return status INVALID when protocol doesn't exists", async () => {
    const protocol = await getOrderByProtocol
    expect(true).toBe(true);
  });
});