function deslocaLetras(str){
    if(str.length <= 1 ){
      return str
    }
        const caracteres = str.split('');
       const primeiroChar = caracteres[0]; 
   
       for (let i = 0; i < caracteres.length - 1; i++) {
           caracteres[i] = caracteres[i + 1]; 
       }
   
       caracteres[caracteres.length - 1] = primeiroChar; 
   
       const novaStr = caracteres.join(''); 
       return novaStr;
   }

//    Desloca uma posição string
// Crie uma função chamada deslocaLetras(str), que recebe uma string e move todos os caracteres uma posição para esquerda, transformando o primeiro carácter na último.



// Ex:

// str = 'abcd' => Deve retornar 'bcda'
// str = '1234' => Deve retornar '2341'