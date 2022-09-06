
// uso de arrow fuction

//criando uma função anônima que, quando chamada, retorna o dobro(quadrado) de um número, usando default = 5, caso não passe parâmetro

let quadrado = function(x = 5){
    return x*x
}

console.log(quadrado(2))



//reescrevendo a função, dessa vem como uma arrow function

let quadrado_fuction = (x = 5) => {
    return x*x
}

console.log(quadrado_fuction())



//caso use somente um parametro, pode ser feita da seguinte forma

let quadrado_func = x => x*x //possui um retorno implicito

console.log(quadrado_func(5))




//outro exemplo

let par_impar = num => num%2===0 ? 'par' : 'impar'

console.log(par_impar(3))
