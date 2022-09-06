// operadoras aritméticos em javascript

/*

lembrando que a precedência das operações em geral em javascript vem entre ()

adição (também usada em concatenação) = +
subtração = -
multiplicação = *
divisão = /
divisão inteira = %
incremento = ++ (é quando já se tem um valor e você vai apenas adicionar uma unidade nele)
decremento = -- (é o inverso do incremento)

*/


var numero1 = 8
var numero = 3

document.write('a operação entre ' + numero + ' e ' + numero1 + ' resulta em ' + (numero+numero1) + '<br/>' )
document.write(numero1 + '<br/>')
document.write('a operação entre ' + numero + ' e ' + numero1 + ' resulta em ' + (numero%numero1++) + '<br/>' )

document.write(numero1+'<br/>')


// simplificando as operações podemos fazer da seguinte forma

var testes = numero1

testes +=5
document.write(testes + '<br/>')
testes -=5
document.write(testes + '<br/>')
testes *=5
document.write(testes + '<br/>')
testes /=5
document.write(testes + '<br/>')
testes %=5
document.write(testes + '<br/>')

//posso também concatenar strings

var algo = 'olá '

algo+= 'juan '

document.write(algo)

