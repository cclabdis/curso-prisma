function removedorDePalavras(str){

    let arrString = str.split(" ")
    let arrNovo = []
        for(let i=0; i < arrString.length; i++ ){
        if(arrString[i].length > 3){
             arrNovo.push(arrString[i])
        }
    }
    return arrNovo.join(" ")
}