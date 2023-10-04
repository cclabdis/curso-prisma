// Swap menor número da array
// Crie a função chamada swapMenorNumero(lst) que recebe uma lista, percorre essa lista em busca do menor número, e realiza uma troca de posição entre o menor número e o primeiro elemento da array. Você pode supor que o menor número aparecerá 1 única vez (ou seja, não haverá um array como [1, 2, 1] onde o menor número aparece mais de uma vez)



// Exemplo:



// lst = [5, 6, 8, 4, 5, 9] => Deve retornar [4, 6, 8, 5, 5, 9]
// lst = [ 2 ] => Deve retornar [ 2 ]
// lst = [4, 5, 2, 4, 5, 2] => Deve retornar [2, 5, 4, 4, 5, 2]
// lst = [ ] => Deve retornar [ ]


function swapMenorNumero(lst) {
    if (lst.length === 0) {
      return lst;
    }
    let menorNumero = lst[0];
    let indiceMenorNumero = 0;
  
    for (let i = 1; i < lst.length; i++) {
      if (lst[i] < menorNumero) {
        menorNumero = lst[i];
        indiceMenorNumero = i;
      }
    }
  
    const primeiroElemento = lst[0];
    lst[0] = menorNumero;
    lst[indiceMenorNumero] = primeiroElemento;
  
    return lst;
  }