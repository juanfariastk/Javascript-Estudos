
// pilar do polimorfismo 

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


//criando uma classe Avestruz, já que o avestruz não pode voar, logo não deve herdar a açãod e voar

class Avestruz extends Passaro{
    constructor(bico, cor, tam, peso){
        super(bico, cor, tam, peso)
    }
    
    enterra_cabeça(){
        console.log('enterrou a cabeça')

    }

    //sobreescrevendo o metodo (pilar do polimorfismo, isto é, o filho não precisa necessariamente ter todos os metodos igual ao pai)
    voar(){
        console.log('avestruz não voa kk')
    }
}

let avestruz = new Avestruz('grande', 'branco e preto', 165, 30000)

console.log(avestruz)
avestruz.enterra_cabeça()
avestruz.voar()



