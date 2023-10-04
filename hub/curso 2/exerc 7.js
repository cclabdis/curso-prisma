function middleOne(lst) {
  const meio = Math.floor(lst.length / 2);
  if (lst.length % 2 === 0) {
    return (lst[meio] + lst[meio - 1]) / 2;
  } else {
    return lst[meio];
  }
}

// Retorna o meio ou a média central
// Crie uma função chamada middleOne(lst), que recebe uma array de inteiros e retorna o valor do elemento central.Caso a array apresente um número par de elementos, retorne a média entre os dois elementos centrais.
//   Ex:
// lst = [1, 6, 5, 4, 9] => 5
// lst = [1, 6, 5, 4, 9, 8] => 4.5(média entre 5 e 4)