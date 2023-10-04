function imprimeSequencias(num) {
    let linha = '';
    for (let i = 1; i <= num; i++) {
      linha += i;
      console.log(linha);
    }
  }
  

//   Imprima a sequência
// Crie uma função chamada imprimeSequencias(num), que recebe um número representando o total de linhas 
// e imprime todas as strings usando loops aninhados seguindo o seguinte formato:

// Ex:

// imprimeSequencias(9), deve imprimir:

// '1'
// '12'
// '123'
// '1234'
// ...
// ...
// '123456789'

// obs: você deve usar 1 console.log para cada linha. Por exemplo, imprimeSequencias(3) deve executar console.log("1"),
//  depois console.log("12"), depois console.log("123")

// Os testes automatizados checarão se o resultado do console está exatamente igual ao esperado, 
// então você não pode usar console.log para debugar, 
// senão o resultado produzido pela sua função não vai bater exatamente com o esperado, e o teste não irá passar.