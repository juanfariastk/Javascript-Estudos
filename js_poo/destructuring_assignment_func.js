
//uso do destructuring assignment em funções..

let arr_ay= [1,3,4,5,6]

//mesmas regras conhecidas anteriormente, lembrando que dessa forma ele 
//já recebe o dado do indice escolhido conforme foi organizado no destruct ao definir as variaveis que a função vai utilizar

function teste_destruct([,a, , , b]){
    console.log(a, b)
}

teste_destruct(arr_ay)

// em objetos

let objeto_teste = {
    a:1,
    b:2,
    c:3,
    d:4
}

function teste_destruct_obj({a:a1, b:b1}){
    console.log(a1, b1)
}

teste_destruct_obj(objeto_teste)