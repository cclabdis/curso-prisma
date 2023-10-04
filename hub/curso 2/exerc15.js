function removeAt(x, str){
    let string = []
    for(let i=0; i <  str.length; i++){
      if(i !== x){
        string.push(str[i])
      }
    }
    return string.join(``)
  }

//   Crie uma função chamada removeAt(x, str), que recebe um número x que representa um índice de uma string, e remove o elemento que nesta posição. Por fim retorne a string com o elemento removido.

// Caso o valor de x esteja além do tamanho dessa string, não devem ser feitas alterações na string e ela deve ser retornada sem sofrer alterações.



// Ex:



// x = 0, str= 'abc' => Deve retornar 'bc'
// x = 4, lstr= 'avião' => Deve retornar 'aviã'
// x = 4, str = 'moto'=> Deve retornar 'moto'
// x = 1, str = ' ' => Deve retornar ' '