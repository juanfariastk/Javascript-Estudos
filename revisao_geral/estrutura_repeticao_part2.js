// estrutura do for in (algo em , par algo em...)

var lista_teste=[1,2,3,4,5,6]

//percorrendo a array com o for in

//criando laço e atribuindo a variavel o valor de cada indice, conforme as interações mudam

for(var y in lista_teste ){

    console.log(y)

    // recuperando o valor interno de cada indice

    console.log(lista_teste[y])


}


// estrutura do forEach (para cada / para cada um dos), precisa de uma função de callback (lembrando que o forEach usa já o próprio tamanho do array)

//muito funcional para percorrer arrays


var segunda_lista=[1,2,3,4,5,6,7,8,9,10]


segunda_lista.forEach(function(valor, i, array){

    console.log('indice é '+ i + ' sendo o seu valor '+ valor)

    if(valor==3){

        document.write('achei o número  3')
        array[i]='2'

    }

    console.log(array)
})




//usando apelas o valor como parametro da função de callback

var terceira_lista=[1,2,3,4,5]

terceira_lista.forEach(function(valor){
    console.log(valor)
})



//recuperando o indice

terceira_lista.forEach(function(valor, indice){
    console.log(indice)
})



//recuperando o próprio array

terceira_lista.forEach(function(valor, indice, array){
    console.log(array)
})



//usando uma função anonima para callback

var anom= function(valor, indice, array){
    console.log(valor, indice)
}

terceira_lista.forEach(anom)