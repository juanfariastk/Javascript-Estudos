
// pilar da herança

// criando uma classe animal (vai servir como pai das outras classes)

class Animal{
    constructor(cor, tamanho, peso){
        this._cor = cor
        this._tamanho = tamanho
        this._peso = peso
    }

    dormir(){
        console.log('dormiu')
    }

}



//criando duas classes que serão filhas da classe Animal

//herda atributos e metodos de Animal
class Cachorro extends Animal{
    constructor(){
        super()
        this._orelhas = 'pequenas e levantadas'

    }

    correr(){
        console.log('correu')
    }

   
    rosnar(){
        console.log('rosnar')
    }

}

//herda atributos e metodos de Animal
class Passaro extends Animal{
    constructor(bico, cor, tam, peso){
        //passando os valores através do super, para os atributos herdados da classe pai
        super(cor, tam, peso)
        this._bico = bico
    }

    voar(){
        console.log('voou')
    }

}

let cao = new Cachorro()

let pas = new Passaro()


console.log(cao)
console.log(pas)

cao.dormir()
pas.dormir()

//definindo agora uma classe que seja filha da classe pai e também filha de uma filha da classe pai

//herda oas atributos de Passaro, que esta por sua vez herda atributos de Animal
class Papagaio extends Passaro{
    constructor(bico,cor, tam, peso){
        //definindo valores para os atributos herdados
        super(bico,cor, tam, peso)
        this._falar = true
    }

    falar(frase){
        console.log(frase)
    }
}

let papagio = new Papagaio()

console.log(papagio)

papagio.voar()



// explicação do super()

//super() permite a herança da classe filha aos atributos e metodos da classe pai

class PapaAlbino extends Passaro{
    constructor(fala, bico, cor, tam, peso){
        //atribuindo acesso com o super() e definindo o valor do atributo bico
        super(bico, cor, tam, peso)
        this._falar = fala
    }
}

let papagioAlbino = new PapaAlbino(true,'pequeno', 'limão', 65, 750)
let papagioFilho = new PapaAlbino(false, 'minusculo', 'amarelo', 25, 150)

console.log(papagioAlbino)
console.log(papagioFilho)

