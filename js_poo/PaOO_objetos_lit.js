// criando objeto da forma padrão, com a notação de classe

class Produto{
    constructor(produto,descricao, preco ){
        this._produto = produto
        this._descricao = descricao
        this._preco = preco

    }

    ver_desc(){
        console.log(`${this._produto} que esta saindo por ${this._preco}`)

    }
}

//testando a classe
let prod = new Produto('geladeira', 'super funcional e compacta', 1200.00)

prod.ver_desc()


//usando a classe literal

/*

cria-se primeiro a variável => var class_lit 

    abrimos as chaves dentro da variavel => class_lit = {

    }

    agora definimos os pares de nomes e valores, lembrando que também pode ter os metódos
    class_lit ={
        atributo1: 'desc_qualq',
        atributo2: 12000,

        verAtributos: function(){
            console.log(atributo1, atributo2)
        }
    }


*/

//instanciando a classe literal

let prod_lit = {
    descricao: 'freezer',
    preco: 1250,

    verDesc: function(){
        console.log(`${this.descricao} saindo por apenas ${this.preco}`)
    }
}

prod_lit.verDesc()

//lembrando que, o uso de objetos literais se deve quando não há necessidade da criação de uma classe para estruturar um objeto, sendo assim a classe literal um objeto único.

// o exemplo mais comum na criação de um formulário, se recuperar seus dados e monta um objeto literal, empacota em json e retorna pro servidor. 



//uso do objeto literal em es5

let nome = 'zezinho'
let idade = 16
let sexo = 'masc'
let profissao = 'digital influencer'


let obj_es5= {
    nome: nome,
    idade: idade,
    sexo : sexo,
    profissao: profissao,

    exibe_atributos: function(){
        console.log(this.nome, this.idade, this.sexo, this.profissao)
    }

}

obj_es5.exibe_atributos()



//uso do objeto literal em es6

let obj_es6 = {
    nome,
    idade,
    sexo,
    profissao,

    exibe_atrib(){
        console.log(this.nome, this.idade, this.sexo, this.profissao)
    }
}

obj_es6.exibe_atrib()

//modificando atributo, caso precise

obj_es6.nome = 'zezin'

obj_es6.exibe_atrib()


//criaçao dinamica de atributos em objetos literais

obj_es6.atributo_novo = 'novo atributo'

console.log(obj_es6.atributo_novo)


//criaçao dinamica de metodos

obj_es6.nova_funcao = () => console.log('função nova criada!')

obj_es6.nova_funcao()


/*

lembrando que um objeto literal é único, então a atribuição dele a qualquer variavél irá apenas mudar a forma de referenciar o objeto, mas não criar uma cópia dele.
um objeto literal é a instânciação de um OBJETO ÚNICO!

*/

//exemplificando com o obj_es6

let teste_obj_unico = obj_es6

teste_obj_unico.exibe_atrib()

