// Loops dentro de loops

function somaTabuada() {
    let soma = 0
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {

            soma += j * i
        }
    }
    return soma
}