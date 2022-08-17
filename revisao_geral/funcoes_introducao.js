//formato da função

/*

function funcaoQualquer(parametro1, parametro2){

    var algo = parametro1 + parametro2
    return algo


lembrando que a ordem de declaração das funções é irrelevante
Lembrando '' o javascript desconsidera parâmetros adicionais na função, logo não ocasiona em erro 
}

*/

/*

escopo de variáveis: global, função e bloco

variavel global:

var global = 'global'



variavel função:

function x(algo){
    var funcao = 'função'
    
}
document.write(funcao)

não será impresso, pois ela não tem hoisting



variável bloco:

if (true){
    var varIf = 'variavel do if'
    document.write(global)
}
document.write(varIf)

será impresso, pois tem hoisting



*/

function calcularArea(largura, comprimento){
    var area = parseInt(largura) * parseInt(comprimento)
    return area
}

var largura = prompt('largura')
var comprimento = prompt('comprimento')

var area2 = calcularArea(largura, comprimento)

document.write(area2 + '<br/>')




