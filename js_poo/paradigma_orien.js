
// uso do paradigma orientado a objetos

//comparando com o paradigma procedural


//exemplo procedural 

function calcula(a,b,op){

    if(op ==='x'){
        console.log(a*b)
    } else{
        console.log('nada')
    }
}


//exemplo orientado a objetos

//definindo o modelo do objeto, lembrando que um objeto é uma abstração de algo

class Calculadora{

    constructor(){

        this.a = 10
        this.b = 7
        this.op = 'mult'
    }

    calcula(){

        if(this.op==='mult'){

            console.log(this.a*this.b)

        } else{

            console.log('nada')

        }
    }
}

let calculadora = new Calculadora()

calculadora.calcula()