
//criando o exemplo de uma marcenaria que produz cadeiras



//usando primeiro o paradigma procedural

//atributos da cadeira

//let q_de_pernas = 4
//let girar = false
//let cor = 'azul'

//metodos da cadeira = se pode girar ou nao



//por não haver como mexer diretamente no atributos e manter salvo as opções anteriores em um objeto, vamos armazenar em uma array

//array com multidimensional

let cadeiras = Array()

cadeiras[0] = Array()

cadeiras[0]['q_de_pernas'] = 4
cadeiras[0]['girar'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()

cadeiras[1]['q_de_pernas'] = 1
cadeiras[1]['girar'] = true
cadeiras[1]['cor'] = 'roxa'


console.log(cadeiras)

function girar_cadeira(i){

    if(cadeiras[i]['girar'] === true){

        console.log('deu uma giradinha')

    }else{

        console.log('da pra girar não kkk')

    }
}

girar_cadeira(1)

//criando função pra facilitar o processo de adicionar as cadeiras no array

function adicionaCadeira(qdp, g,c){

    let cadeira = Array()

    cadeira['q_de_pernas']= qdp
    cadeira['gira'] = g
    cadeira['cor'] = c 

    cadeiras.push(cadeira)

}

adicionaCadeira(3, false, 'azul')

console.log(cadeiras)
girar_cadeira(2)



//usando agora o paradigma orientado a objeto para fazer a mesma ideia

class Cadeiras{

    //definindo os atributos

    constructor(qdp, gira, cor){
     
        this.qtd_pernas = qdp
        this.girar = gira
        this.cor = cor

    }

    //definido os metodos

    girando(){

        if(this.girar === true){

            console.log('deu uma giradinha')

        } else{

            console.log('da pra girar não kk')

        }
    
    }

}

let cadeira_obj1= new Cadeiras(3, true, 'rosa')
let cadeira_obj2 = new Cadeiras(1, false, 'violeta')

console.log(cadeira_obj1)
console.log(cadeira_obj2)

cadeira_obj1.girando()
cadeira_obj2.girando()


//armazenando de maneira inteligente

let cadeiras_array_nova = Array()

cadeiras_array_nova.push(cadeira_obj1)
cadeiras_array_nova.push(cadeira_obj2)

console.log(cadeiras_array_nova)

// ou 

cadeiras_array_nova.push(new Cadeiras(4, false, 'branca'))

console.log(cadeiras_array_nova)