// percorrendo uma array com um loop

var array_teste = ['teste1', 'teste2', 'teste3', 'teste4','teste5']

//criando loop

var x = 0

while(x<array_teste.length){

    //imprimindo os indices no laço while

    document.write(array_teste[x] +'<br/>')
    x++

}



//criando laços encadeados em outros laços

document.write('<hr/>')

for (var v = 1; v<=10;v++){

    document.write('<hr/>')

    for(var x=1; x<=10; x++){

    document.write( v +' x '+ x +' = '+ (v*x) + '<br/>')

    }

}