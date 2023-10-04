function pareEmZero(hub) {
    let soma = 0;
    let proximoNumero = hub.proximoNumero();

    while (proximoNumero !== 0) {
        soma += proximoNumero;
        proximoNumero = hub.proximoNumero();
    }

    return soma;
}

function pareEmZero(hub) {
    let soma = 0;
    let proximoNumero = hub.proximoNumero();
    for (; ;) {
         if(proximoNumero !== 0){
           soma += proximoNumero;
           proximoNumero = hub.proximoNumero();
         }else{
             break
         }
 
     }
     return soma;
 }