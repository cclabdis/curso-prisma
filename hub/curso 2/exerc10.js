// Contar a quantidade de 'c'
// Crie uma função chamada contaC(str) que atravessa uma string e retorna a quantidade total de letras 'c' que aparecem na string.
// Ex:
// str = 'carcará' => Deve retornar 2
// str = 'característica' => Deve retornar 3
// str = '' => Deve retornar 0

function contaC(str){
    let contador = 0;
    for(let i=0; i < str.length; i++){
      if(str[i] === `c`){
        contador = contador +1
      }
    }
    return contador
  }