/*
1) Crie uma aplicação para efetuar cálculo aritméticos de soma e subtração.
Considere os seguintes critérios:
1) Ao executar o script a aplicação deve solicitar a entrada de um número, seguido de
uma operação de soma ou subtração e posteriormente seguido de um segundo
número.
2) A operação deve ser inserida pelo usuário de forma textual, ou seja, quando o sistema
solicita a operação o usuário deve informar o texto ‘soma’ ou ‘subtração’ (sem as
aspas).
3) Na sequência o sistema deve enviar os parâmetros para uma função efetuar o devido
cálculo. Exemplo: calculo(num1, num2, operacao).
4) A função deve executar o cálculo com base na operação informada pelo usuário e na
sequência deve retornar o valor encontrado.
5) Ao término o sistema deve fornecer a seguinte saída para o usuário:
*/

var numero1 = prompt('digite o primeiro numero')
var numero2 = prompt('digite o segundo numero')

var opera = prompt('qual a operação a ser feita? soma ou substração?').toLowerCase()

var soma = parseInt(numero1) + parseInt(numero2)

var sub = parseInt(numero1) - parseInt(numero2)


function operador (metodo, soma, subs){
    if (metodo=='soma'){
        resultado=soma
        return resultado
    } else {
        resultado=subs
        return resultado
    }
}

document.write( 'resultado da conta'+operador(opera,soma,sub))
