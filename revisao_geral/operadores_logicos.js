
// lembrando que operadores logicas junta resultados de comparação para gerar outro resultado

/*

Caso X seja verdade E também Y, usamos  (&&)

Caso X seja verdade ou Y, usamos (||)

Caso X não seja verdade, usamos (!) e se retorna uma verdade

*/

// usando com uma estrutura de decisão

if (2==2 && 3>=1){
 document.write('true')
} else{
    document.write('false')
}

if (2==3 || 3>=1){
    document.write('<br/>true')
   } else{
       document.write('<br/>false')
}

// usando a inversão com ! em uma expressão que o 1 condição seja verdade

if (!(2==2 && 3>=1)){
    document.write('<br/>true')
   } else{
       document.write('<br/>false')
}

// usando a inversão com ! em uma expressão que o 1 condição seja falsa

if (!(2==3 && 3>=1)){
    document.write('<br/>true')
   } else{
       document.write('<br/>false')
}

// testando no script de nota anterior 

var nota = prompt('qual sua nota?')
var faltas = prompt('qual sua quantidade de faltas?')
var faltas_maximas= 45
var media = 6

if (nota>=media && faltas<faltas_maximas){
    document.write('aprovado')
} else{
    document.write('vish kk')
}