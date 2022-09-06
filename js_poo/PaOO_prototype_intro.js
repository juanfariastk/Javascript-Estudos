
//criando objeto1...

let av1 = {
    cor:'azul',
    modelo: 'airbus a1313',
    levanta_voo: function(){console.log('deu uma voada!')}
}

//criando objeto2...

let av2 = function(){
    this.cor='azul-marinho',
    this.modelo='airbus 1212',
    this.levanta_voo=function(){console.log('deu aquelaaaa voada!')}
}

let av3 = new av2

//console.log(av3)

// criando objeto3...

class Av3{
    constructor(){
        this.cor='azul-ciano',
        this.modelo='embraer E-jets'

    }

    levanta_voo(){console.log('deu aquela  voadinha!!!')}
}

let av4 = new Av3()

console.log(av1)
console.log(av3)
console.log(av4)

//conferir no console a presença do  __proto__


//prototype herança com proto...

let animal ={
    atrib1:'a'
}

let vertebrado ={
    __proto__:animal,
    atrib2:'n'
}
//usando __proto__
let ave = {
    __proto__:vertebrado,
    atrib:'3'
}

console.log(ave.atrib, ave.atrib2, ave.atrib1)

//usando Object.prototype pra definir um atributo global...

Object.prototype.atributo_global = 'teste'

console.log(ave.atributo_global)