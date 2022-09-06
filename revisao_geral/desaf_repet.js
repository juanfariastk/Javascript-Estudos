/*

Crie uma tabuada de 1 a 10 (laços encadeados)", implemente a mesma solução, porém utilizando o comando while.

*/

var x = 1

while(x<=10){

    document.write('<hr/>')
    var y=1

    while (y<=10){
        document.write( x +' x '+ y + ' = ' + (x * y)+'<br/>')
        y++
    }

    x++
}