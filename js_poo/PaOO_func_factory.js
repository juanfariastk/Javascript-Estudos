//criando objeto literal, facilita a criação de objetos literais com uma função

let Bicicleta = {
    cor:'azul',
    marcha:'multi',
    aro:'12',

    pedala(){ console.log('deu uma pedalada! ') }

}

console.log(Bicicleta)

//criando a factory

let BiciFactory = function(cor, marcha, aro){
    return {
        cor,
        marcha,
        aro,

        pedala(){ console.log('deu uma pedaladinha! ') }

    }
}

//usando a função factory criada

let bicicleta2 = BiciFactory('preto', 'mono', '29')

console.log(bicicleta2)
bicicleta2.pedala()

