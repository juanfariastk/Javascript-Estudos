// laços/loops

// precisa de um critério de parada 



//iniciando com while (enquanto...)

var x = 1

while( x<=10){
    document.write(x +'<br/>')
    x+=1

}


//usando break para parar

var y=1

while(y<=10){

    if(y==5){
        document.write('parou!' +'<br/>')
        break
    } else{
        y+=1
        document.write('ainda não parou..'+'<br/>')
    }
    
}

// o continue serve para parar as intruções atuais e começar outra em específico

var z = 0

while (z<=10){

    z++

    if(z==5){

        document.write('eitakkk')
        continue
    }
    document.write('ainda não kkk'+'<br/>')
    
}




//loop do While (faça enquanto...)

//formado do while

var j = 13

do{
    //vai imprimir e depois vai verificar, ou seja o while faz algo enquanto um parâmetro não for atendido a sua parada, já o do while ele vai executar o seu código pra só depois verificar se deve ou não permanecer executando
    document.write('<hr/>'+'eita k')
} while( j<=10)




//loop for (durante...)

//formado do for

/*

for (variavel; condicao; controle){

}

*/

for (var f = 1; f<10; f++){
    document.write('<br/>'+f+'eae'+(f+1))
}







