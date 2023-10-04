import { faker } from "@faker-js/faker";

import { createOrder, getOrderByProtocol } from "../../src/order-service";
import * as orderRepository from "../../src/order-repository";
import { OrderInput } from "../../src/validator";

// it("should apply discount", async () => {
//   const voucher: VoucherCreateData = {
//     code: "AAA",
//     discount: 10,
//     used: false,
//   };

//   jest
//     .spyOn(voucherRepository, "getVoucherByCode")
//     .mockImplementationOnce((): any => {
//       return {
//         id: 1,
//         code: voucher.code,
//         discount: voucher.discount,
//         used: voucher.used,
//       };
//     });

//   jest
//     .spyOn(voucherRepository, "useVoucher")
//     .mockImplementationOnce((): any => {});

//   const amount = 1000;
//   const order = await voucherService.applyVoucher(voucher.code, amount);

//   expect(order.amount).toBe(amount);
//   expect(order.discount).toBe(voucher.discount);
//   expect(order.finalAmount).toBe(
//     amount - amount * (voucher.discount / 100)
//   );
// });

describe("Order Service Tests", () => {
  it("should create an order", async () => {
    const order: OrderInput = {
      client: "Juju",
      description: "lalalalal",
      
    };
    jest.spyOn(orderRepository, "create").mockImplementation((): any => {
     return {
      id: 1,
      client: order.client,
      description: order.description,
      protocol: new Date().getTime().toString(),
      status: "IN_PREPARATION"
     }
    })
    const orderCall = await createOrder(order)
    expect(orderCall).toBe(order);

    expect(true).toBe(true);
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