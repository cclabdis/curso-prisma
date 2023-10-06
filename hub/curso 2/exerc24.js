function desenhaTriangulo(num){
    let tamBase = num;
    for(let i = 1; i <= Math.ceil(tamBase/2); i++){
          let str = "";
          str = str.padStart(Math.ceil(tamBase)/2 - i + 1, " ")
        //   padStart(length, padString): Este é um método de string em JavaScript que preenche o início da string 
        // com os caracteres especificados em padString até que a string atinja o length desejado.
          for (let j = 1; j <= i*2-1; j++){
              str += '*' 
      }
          console.log(str)
    }
  }
  
  desenhaTriangulo(15)
  

  function imprimePadrao(numLinhas){
    for(let i = 1; i <= numLinhas; i++){
      let linha = ``
      for(let j = 1; j <= i; j++){
        linha += j + ` `
      }
      console.log(linha.trim())
    }
    for(let i = numLinhas - 1; i >= 1; i--){
      let linha = ``
      for(let j = 1; j <= i; j++){
        linha += j + ` ` 
      }
      console.log(linha.trim())
    }
  }

//   Imprime o Padrão
// Cria a função chamada imprimePadrao(numLinhas), que recebe um número e imprime, de modo crescente a partir do número 1 até o número recebido, em seguida, de modo decrescente, até o número 1.



// Ex:



// ﻿imprimePadrao(5) deve imprimir 9 linhas no console, cada uma sendo (sem as aspas):

// "1"
// "1 2"
// "1 2 3"
// "1 2 3 4"
// "1 2 3 4 5"
// "1 2 3 4"
// "1 2 3"
// "1 2"
// "1"
