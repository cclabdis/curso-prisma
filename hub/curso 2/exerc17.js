// Remove a maior palavra
// Crie a função chamada removeMaior(str), 
// que recebe uma string de palavras separadas por vírgula-e-espaço (ou seja, o par de caracteres ", ") 
// e remove a maior palavra dessa string. Se existirem mais de uma maior palavra, todas com o maior comprimento deverão ser retiradas. 
// Essa função retorna uma nova string sem as maiores palavras. Esse lista deve ter o mesmo formato de separação por vírgula-e-espaço.

// Ex:
// str = 'casa, moto, carro' => Deve retornar 'casa, moto' (notar que há um espaço após a vírgula tanto na entrada quanto na saída)
// str = 'serra, moto, carro, casa' => Deve retornar 'moto, casa'
// str = 'pedra, papel, carro, serra' => Deve retornar ' '

function removeMaior(str) {
    const palavras = str.split(", ");
    
    if (palavras.length === 0) {
        return "";
    }

    let maiorComprimento = palavras[0].length;

    for (const palavra of palavras) {
        if (palavra.length > maiorComprimento) {
            maiorComprimento = palavra.length;
        }
    }

    const palavrasFiltradas = palavras.filter(palavra => palavra.length < maiorComprimento);

    return palavrasFiltradas.join(", ");
}