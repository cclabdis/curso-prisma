// Insere 'x'
// Crie uma função chamada insere(x, lst), que recebe um número x e uma array ordenada de números (ordem crescente) 
// e insere corretamente x na posição adequada, 
// ou seja, numa posição tal que a lista continue ordenada. Você deve retornar a nova array.
// Ex:
// x = 4, lst = [1, 2, 2, 2, 4, 5, 8] => Deve retornar [1, 2, 2, 2, 4, 4, 5, 8]
// x = 10, lst = [2, 4, 6, 8] => Deve retornar [2, 4, 6, 8, 10]
// x = 5, lst = [ ] => Deve retornar [5]

function insere(x, lst){
    if (lst.length === 0 || x >= lst[lst.length - 1]) {
      lst.push(x);
      return lst;
    }
   for (let i = 0; i < lst.length; i++) {
      if (x < lst[i ]) {
        lst.splice(i, 0, x);
        return lst;
      }
  }
  }