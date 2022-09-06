
//uso do operador spread = espalhar dados
//uso do operador rest = juntar dados

// rest/spread = junção de duas funções em certos contextos


//contexto do spread...

let string_teste = 'uso do rest/spread'

console.log(string_teste)
console.log(...string_teste)

//colocando a nossa string dentro de um array, sem uso de loops e já indexando

string_teste = [...string_teste]

console.log(string_teste)


//espalhando valores de duas arrays em uma única array

let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9.10]
let array3 = [...array1, ...array2,11,12,13,14,15]

console.log(array3)


//uso em objetos

let pessoa = { nome:'zezinho', idade:16, escolaridade:'ensino médio'}
let registro_completo_pessoa1= {endereco:'rua em algum lugar', numero:3322, ...pessoa}

console.log(registro_completo_pessoa1)



//contexto rest, utilizado bastante em funções

function soma_valor(...numeros){
    let resultado = 0

    //usando forEach, para percorrer o array criado pelo rest
    numeros.forEach(v => resultado+=v)
    return resultado

}


console.log(soma_valor(2,3,4,5,6,67,7))


//outro uso...

function multiplica(m, ...numeros){
    let resultado = 0
    numeros.forEach( v => resultado+= m*v)

    return resultado
}

console.log(multiplica(4,3,4,5,6,7))


