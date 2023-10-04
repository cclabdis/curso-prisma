function descarta(x, y, lst) {
    const novaLista = [];
  
    for (let i = 0; i < lst.length; i++) {
        if (i === x || i === y) {
            continue;
        }
        novaLista.push(lst[i]);
    }

    return novaLista;
}

// Não imprimo 3 e 7
// Crie uma função descarta(x, y, lst), que recebe dois números x e y e uma lista. A função deve retornar uma nova lista descartando os elementos presentes nos índices x e y da lista recebida. Use o comando continue na sua resolução (não será verificado pelos testes, mas exercite !)



// Ex:



// x = 2, y = 5, lst = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] => Deve retornar [0, 1, 3, 4, 6, 7, 8, 9]
// x = 2, y = 0, lst = ['arroz', 'feijão', 'milho', 'azeitona', 'couve'] => Deve retornar ['feijão', 'azeitona', 'couve']
// x = 1, y = 1, lst = [10, 20] => Deve retornar [10]
// x = 1, y = 1, lst = [ ] => Deve retornar [ ]