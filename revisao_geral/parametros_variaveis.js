// como lidar com uma quantidade indeterminada de parametros

//utilizando arguments como forma de receber todos os parametros e organiza-los em um tipo de array

function teste(){

    var result = 0

    for (var i in arguments){

        result+=arguments[i]

        console.log(arguments[i])
    }
    return result

}

console.log(teste(7,5,7,8))