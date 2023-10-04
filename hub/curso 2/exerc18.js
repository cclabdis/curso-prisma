//loop infinito e interrupções

// function validaNome(){
//     let nome = perguntaNome();
//     while(nome.length < 3){
//         console.log(`Nome do usuário invalido`)
//         nome = perguntaNome()
//     }
//     return nome;
// }


function validaNome(hub) {
    let nome;
    for (; ;) {
      let nome = hub.perguntaNome();
        if(nome.length < 3){
            console.log(`Nome inválido, insira no mínimo 3 caracteres`)
        }else{
            break
        }

    }
    return nome;
}