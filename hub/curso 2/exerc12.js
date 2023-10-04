// Encontra números
// Crie uma função chamada indexNum(str) que recebe uma string, 
// for()encontra os índices dessa string onde o caractere é numérico (0,1,2,...,9), e retorna a lista desses índices.



// Ex:

// str = "1abc23" => Deve retornar [0, 4, 5]
// str = "abc3d3" => Deve retornar [3, 5]
// str = "abc" => Deve retornar [ ]

function indexNum(str){
    let acumulador= []
    for(let i=0; i< str.length; i++){
      if(!isNaN(parseInt(str[i]))){
        acumulador.push(i)
      }
    }
    return acumulador
  }