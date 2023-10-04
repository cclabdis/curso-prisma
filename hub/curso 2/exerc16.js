//Coda ai!
function insereVirgula(str){
    let arr = str.split(` `)
    let newArr = []
  if(arr.length === 1){ return str}
    
    for(let i = 0; i < arr.length -1; i++){
        newArr.push(arr[i] + `,`)
    }
    newArr.push(arr[arr.length -1])
    return newArr.join(` `)
     
  }
  

//   Adiciona vírgula
// Crie uma função chamada insereVirgula(str), que recebe uma string e adiciona uma vírgula depois de cada palavra dessa string, menos na última.



// ﻿Ex:



// str = 'Pedra Papel Tesoura' => Deve retornar 'Pedra, Papel, Tesoura'
// str = 'casa carro moto' => Deve retornar 'casa, carro, moto'
// str = ' ' => Deve retornar ' '