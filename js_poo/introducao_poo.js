
// hellow!
const getMessage = () => "Hello World";
document.getElementById('output').innerHTML = getMessage();


//o escopo é a area em que se abre e fecha as chaves


/* escopo global

    var escopo_global= 'alguma coisa'
    caso eu a coloque em qualquer função ou bloco, ela será utilizada em sua integra


*/



/* escopo de funçao

    

    function teste_escopo(){

        var escopo_funcao='outra coisa'
        não sofre hoisting

        ESCOPO

    } 
*/


/* escopo de bloco

    funcion teste_escopo2(){

        
        sofre hoisting caso esteja dentro de algum bloco, ou sofre hoisting para fora do bloco, indo para uma função, ou sai do bloco para ser global

        if(sla) {

            var escopo_funcao2='alguma outra coisa'

            ESCOPO DO BLOCO IF

        } else{

        }

        console.log(escopo_funcao2) /sera printado por sofrer hoisting
    }

    ou

    if(algoumacoisa > outra coisa ){

        var escopo_bloco='algumas outras coisas'

        ESCOPO DO BLOCO IF

    } else{

    }

    console.log(escopo_bloco)

    //sera printado por sofrer hoisting para global
    
*/

// por isso a necessidade de usar var e let, o let preserva o escopo
// caso eu substitua da seguinte forma

/*

    if (true){
        let teste_let = ' alg csa'

    }else{

    }

    console.log(teste_let) / irá dar erro, pois o let preserva o escopo, ao contrário do var

*/


//nova forma de tratar strings

const NOME = 'Juan'

console.log(`olá meu nobre ${NOME} você é uma lenda`)

//usando com funções

function teste_calc(z,x){
    return z*x
}

console.log(`o resultado da sua conta deu ${teste_calc(2,7)}`)