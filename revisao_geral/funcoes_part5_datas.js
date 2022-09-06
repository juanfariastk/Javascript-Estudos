// função Date

//atribuindo uma nova data a váriavel
var dataHoje = new Date()

//exibindo o dia
document.write('<h1>'+ dataHoje.getDate()+'<h1/>')

//exibindo o mês, js exibe os meses de 0 até 11, por isso precisa somar com +1
document.write('<h1>'+ (dataHoje.getMonth()+ 1) +'<h1/>')

//exibindo o ano
document.write('<h1>'+ dataHoje.getFullYear()+'<h1/>')

//juntando tudo

document.write('<h1>'+ dataHoje.getDate()+'/'+ (dataHoje.getMonth()+ 1)+ '/' + dataHoje.getFullYear() +'<h1/>')

