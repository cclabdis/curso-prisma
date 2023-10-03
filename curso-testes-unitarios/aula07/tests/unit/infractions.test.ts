describe("Infractions Service Tests", () => {
  it("should get infractions from user", async () => {
    // TODO
    expect(true).toBe(true);
  });

  it("should throw an error when driver license does not exists", () => {
    // TODO
    expect(true).toBe(true);
  })
});


// Da mesma forma como validamos os cenários onde tudo acontece como previsto, devemos validar os cenários onde as coisas não andam exatamente como gostaríamos.
// No código abaixo existe um cenário onde a service lança um 404 quando o usuário não é encontrado com a propriedade licenseId.
// ➡️ Implemente os testes do arquivo unit/infractions.test.ts usando o spyOn para mockar os respectivos comportamentos dos repositórios.
// A implementação já possui alguns testes de integração para que você possa entender a regra de negócio básica.