
// uso do pilar do encapsulamento

//criando objeto

class Televisao{

    constructor(){

        this._canais = Array(2,4,5,7,10)
        this._canalAtivo= 5
        this._volume = 5

    }

    //criando os metodo get e set

    get canalAtivo(){

        return this._canalAtivo

    }

    set canalAtivo(canal_novo){

        //verificando se o canal está presente dentro da tv

        this._canais.indexOf(canal_novo) !== -1 ? this._canalAtivo = canal_novo : console.log('canal invalido')
        

    }
}

//criando uma instância

let tv1 = new Televisao()
tv1.canalAtivo = 4
console.log(tv1.canalAtivo)

