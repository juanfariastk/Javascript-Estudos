/*
Crie uma aplicação capaz de identificar a faixa etária com base na idade informada pelo
usuário. Considere os seguintes critérios:
Se a idade informada for maior ou igual a 0 e menor que 15, exibir a mensagem “Criança”.
Se a idade informada for maior ou igual a 15 e menor que 30, exibir a mensagem “Jovem”.
Se a idade informada for maior ou igual a 30 e menor que 60, exibir a mensagem “Adulto”.
Se a idade informada for maior ou igual a 60, exibir a mensagem “Idoso”.
Fique à vontade para utilizar qualquer uma das funções aprendidas para exibição de dados
para o usuário.
*/

var idade = prompt('qual sua idade?')

idade=parseInt(idade)

var faixa

if (idade>=0 && idade<15){
   var faixa= 'criança'
} else if(idade>=15 && idade<30){
    var faixa= 'jovem'
} else if (idade>=30 && idade<60){
   var faixa= 'velho'
} else{
    var faixa =' pé na cova'
}

document.write(faixa)