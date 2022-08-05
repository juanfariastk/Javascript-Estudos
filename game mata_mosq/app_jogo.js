
//definindo a altura e largura que vai ter o jogo

var altura_jogo 
var largura_jogo
var vidas=1
var tempo=60
var cria_tempo=0


//colocando a dificuldade em uma váriavel

var dificuldade_do_jogo = window.location.search
dificuldade_do_jogo = dificuldade_do_jogo.replace('?', '')

if(dificuldade_do_jogo=='normal'){

    cria_tempo= 1500

} else if (dificuldade_do_jogo=='dificil'){

    cria_tempo=1000

} else{

    cria_tempo=750

}



function ajuste_tamanho(){

    altura_jogo= window.innerHeight
    largura_jogo= window.innerWidth

    //testando dados
    console.log(largura_jogo, altura_jogo)


}

ajuste_tamanho()



//definindo tempo de criação e vida de cada mosquito (elemento)

var cria_mosq = setInterval(function(){gerando_mosquitos()} ,cria_tempo)



//definindo os mosquitos e as posições

function gerando_mosquitos(){

    //criando o ciclo de vida do mosquito após a chamada do setInterval e alterando a barra de vida

    if(document.getElementById('mosquitos')){

        document.getElementById('mosquitos').remove()

        //removendo corações

        if (vidas>3){
            
            window.location.href='fim_jogo.html'

        }

       document.getElementById('hp'+vidas).src='imagens/coracao_vazio.png'

       vidas++
    }
    


    var posicao_1= Math.floor(Math.random()* altura_jogo)-90
    var posicao_2= Math.floor(Math.random()* largura_jogo)-90


    //criando limites 

    posicao_1 = posicao_1 < 0 ? 0 : posicao_1
    posicao_2 = posicao_1  <0 ? 0 : posicao_2


    //criando o elemento

    var mosquitos_criar = document.createElement('img')
    mosquitos_criar.src = 'imagens/mosquit.png'

    //passando o estilo

    mosquitos_criar.className= tamanhos_mosq() + ' ' + girando_lado()

    //definindo posições

    mosquitos_criar.style.left= posicao_1 + 'px'
    mosquitos_criar.style.top= posicao_2 + 'px'
    mosquitos_criar.style.position= 'absolute'

    //definindo um id 

    mosquitos_criar.id='mosquitos'

    //criando uma ação ao clicar o mosquito

    mosquitos_criar.onclick=function(){
        this.remove()
    }


    document.body.appendChild(mosquitos_criar)



    //testando dados (pos)
    console.log(posicao_1, posicao_2)

    //testando dados (tam)
    console.log(tamanhos_mosq())

    //testando dados (lado)
    console.log(girando_lado())


}

gerando_mosquitos()



//definindo tamanhos aleatórios para os mosquitos

function tamanhos_mosq(){
    
    //gerando os tipos de mosquito

     var tipo = Math.floor(Math.random()*6)

     //escolhendo a classe de tamanho que vão receber
     switch(tipo){
     
     case 0 :
        return 'mosquito'

     case 1:
        return 'mosquito1'

     case 2:

        return 'mosquito2'
     case 3:
        return 'mosquito3'

     case 4:
        return 'mosquito4'

     case 5:
        return 'mosquito5'
     }


}



//definindo lados invertidos para os mosquitos

function girando_lado(){

    var tipo =  Math.floor(Math.random()*2)

    //escolhendo o lado

    switch(tipo){

        case 0:
            return 'lado1'
        
        case 1:
            return 'lado2'
    }

}



//criando cronometro do jogo

document.getElementById('cronos').innerHTML = tempo


var cronometro = setInterval(function(){

    tempo--
    if (tempo<0){

        clearInterval(cronometro)
        clearInterval(cria_mosq)
        window.location.href = 'vitoria_jogo.html'

    } else{
        document.getElementById('cronos').innerHTML = tempo
    }
    

},1000)





