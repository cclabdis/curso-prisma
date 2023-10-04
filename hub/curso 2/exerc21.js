function paraNoDobro(lst) {
    let soma = 0;

    for (let i = 0; i < lst.length; i++) {
        if (lst[i] === i * 2) {
            soma += lst[i];
            break;
        } else {
            soma += lst[i];
        }
    }

    return soma;
}


// Para no dobro
// Crie uma função chamada paraNoDobro(lst), que recebe uma lista e itera por essa lista enquanto soma os elementos até chegar ao final, ou até encontrar um elemento que possuí um valor que é o dobro do índice que esse elemento ocupa. Retorne a soma acumulada incluindo o valor de parada. Use o comando break na sua resolução (não será verificado pelos testes, mas exercite !)



// Ex:

// ﻿

// lst = [0, 5, 6, 7] => Deve retornar 0
// lst = [ ] => Deve retornar 0
// lst = [1, 2, 3, 5] => Deve retornar 3
// lst = [9, 0, 1, 3, 7,10, 9, 8] => Deve retornar 30
// lst = [8, 3, 3, 6, 31, 100, 67] = Deve retornar 20