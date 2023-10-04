function adicionaCedilha(str, x) {
    if (x >= str.length) {
        return str + 'ç';
    } else {
        return str.slice(0, x) + 'ç' + str.slice(x);
    }
}

// Adicionar 'ç' na posição x
// Crie uma função chamada adicionaCedilha(str, x), que recebe uma string e adiciona um "ç" na posição x da string, empurrando as letras para direita. Caso não exista posição x, adicione a letra no final da string.



// Ex:

// x = 3, str = 'facão' => Deve retornar 'facção
// x = 19, str = 'Matagal' => Deve retornar 'Matagalç'
// x = 13, str = '' => Deve retornar 'ç'