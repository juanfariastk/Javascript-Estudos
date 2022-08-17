
// é uma estrutura de decisão menor

/*

formato do operador ternário:

var variavel = <condição1> ? <verdade> : <false>


*/

var nota = prompt('qual sua nota?')
var faltas = prompt('qual sua quantidade de faltas?')
var faltas_maximas= 45
var media = 6

//logica com uma estrutura de condição completa

/*
if (nota>=media && faltas<faltas_maximas){
    document.write('aprovado')
} else{
    document.write('vish kk')
}
*/

//logica com uma estrutura de decisão limitada
var resultado = (nota >= media && faltas<faltas_maximas) ? 'aprovado' : 'reprovado'

console.log(resultado)