// forma do JS se comunicar com recursos do browser 

// ex: salvar cookies ou um histórico determinado e afins



//usando o Window (janela do browser onde tudo é renderizado)
// é onde se incorpora o DOM HTML da página

//função pra criar um pop-up

var pop_up  

function abrindo(){
   pop_up = window.open('https://teste.com.br/', 'abrindo_janela', 'width=1000 , height=1000')
}
 
function fechando(){
    pop_up.close()
}



//usando o screen, responsável pela tela, não a janela
//utilizado para tomar as decisões de renderização dentro da página

//utilizando o avalHeight e Width para pegar o tamanho da tela


var altura = window.screen.availHeight
var largura = window.screen.availWidth

console.log(altura)
console.log(largura)

//criando um exemplo de condição com base o tamanho da tela

if (largura<600){
    document.write('<hr/>'+'esta tela é muito pequena!')
} else{
    document.write('<hr/>'+'esta tela é ideal!')
}



// usando o location, responsavel por fornecer o acesso a atributos e metodos do site atual
// pode como exemplo redirecionar ou recarregar a página, um link é um exemplo do uso de location

//utilizando o famoso href...

function redirecionando(){
    window.location.href='https://teste.com.br/'
}



//usando o timing, responsavel pelo uso do tempo nas aplicaões
// geralmente se usa com base pra tomar alguma decisão de acordo com o tempo passado ou em um determinado intervalo


//usando o setTimeout, lembrando de usar milisegundos...

/*
setTimeout(function(){
    document.write('<hr/>'+ ' eita, passou o tempo! ')
}, 5000)

*/



//usando o setInterval

// o loop está infinito

/*

setInterval(function(){
    document.write('o tempo está passando!' + '<hr/>' + '<br/>')
}, 6000)


*/

// para acabar o tempo com clearTimeout() e clearInterval()

var i = 3

var intervalo_ =setInterval(function(){
    document.write('o tempo está passando!' + i +'<hr/>' + '<br/>');
i = --i  

if(i==0){
    clearInterval(intervalo_)
} }, 2000)










