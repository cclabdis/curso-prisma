# Curso de testes unitarios


Testes realizados em camada unitária, especialmente do service.

Nos testes unitarios nao usamos o supertest

*Jest* Configurações:

```json
npm i -D jest ts-jest typescript @types/jest
```
no *js.config.ts*

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "src"],
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  testMatch: ["<rootDir>/tests/*.(test|spec).ts"],
};
```

no *tsconfig.json*

```javascript
{
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src",
  },
  "ts-node":{
    "esm": true
  },
}
```


*MOcks*

```javascript
it("should apply discount", async () => {
  const voucher: VoucherCreateData = {
    code: "AAA",
    discount: 10,
    used: false,
  };

  jest
    .spyOn(voucherRepository, "getVoucherByCode")
    .mockImplementation((): any => {
      return {
        id: 1,
        code: voucher.code,
        discount: voucher.discount,
        used: voucher.used,
      };
    });

  jest
    .spyOn(voucherRepository, "useVoucher")
    .mockImplementation((): any => {});

  const amount = 1000;
  const order = await voucherService.applyVoucher(voucher.code, amount);

  expect(order.amount).toBe(amount);
  expect(order.discount).toBe(voucher.discount);
  expect(order.finalAmount).toBe(
    amount - amount * (voucher.discount / 100)
  );
});
```

Ao usarmos o spyOn() e o mockImplementation(), acabamos trocando a implementação em todo o contexto do arquivo de testes. Ou seja, se outros testes dependem dessa implementação e queremos fingir resultados diferentes, vale a pena usar o mockImplementationOnce().

Com mockImplementationOnce() ele é usado apenas uma vez.
```javascript
it("should apply discount", async () => {
  const voucher: VoucherCreateData = {
    code: "AAA",
    discount: 10,
    used: false,
  };

  jest
    .spyOn(voucherRepository, "getVoucherByCode")
    .mockImplementationOnce((): any => {
      return {
        id: 1,
        code: voucher.code,
        discount: voucher.discount,
        used: voucher.used,
      };
    });

  jest
    .spyOn(voucherRepository, "useVoucher")
    .mockImplementationOnce((): any => {});

  const amount = 1000;
  const order = await voucherService.applyVoucher(voucher.code, amount);

  expect(order.amount).toBe(amount);
  expect(order.discount).toBe(voucher.discount);
  expect(order.finalAmount).toBe(
    amount - amount * (voucher.discount / 100)
  );
});
```

```javascript
it("should not apply discount for invalid voucher", async () => {
  const voucher: VoucherCreateData = {
    code: "CCC",
    discount: 10,
    used: false,
  };

  jest
    .spyOn(voucherRepository, "getVoucherByCode")
    .mockImplementationOnce((): any => {
      return undefined;
    });

  const amount = 1000;
  const promise = voucherService.applyVoucher(voucher.code, amount);

  expect(promise).rejects.toEqual({
    message: "Voucher does not exist.",
    type: "conflict",
  });
});
```