//adicionando ou removendo os dias de uma data

var data = new Date()

//convertendo para string

document.write(data.toString() + '<hr/>' )


//usando o set.Date para definir um valor novo para o dia
data.setDate(data.getDate()+1)

document.write(data.toString() + '<hr/>' )

data.setDate(data.getDate()-2)

document.write(data.toString() + '<hr/>' )



//usando o set.Month para definir um valor novo para o mês
data.setMonth(data.getMonth()+1)

document.write(data.toString() + '<hr/>' )

data.setMonth(data.getMonth()-2)

document.write(data.toString() + '<hr/>' )



//usando o set.FullYear para definir um valor novo para o ano
data.setFullYear(data.getFullYear()+1)

document.write(data.toString() + '<hr/>' )

data.setFullYear(data.getFullYear()-2)

document.write(data.toString() + '<hr/>' )



// calculando os dias entre duas datas

var data1 = new Date(2022, 7, 3)

var data2 = new Date(2022, 10, 29)

document.write(data1.toString() + '<hr/>')

document.write(data2.toString() + '<hr/>')

// convertendo para um numero calculável, pois está em string, usando o getTime em milisegundos de 1970 até a data em questão

document.write(data1.getTime() + '<hr/>')

document.write(data2.getTime() + '<hr/>')

//encontrar a quantidade de milisegundos entre cada data

var datas3 = data2.getTime() - data1.getTime()

document.write((data2.getTime() - data1.getTime()) + '<hr/>')

//convertendo finalmente...

var diasMili = 86400000

document.write('faltam exatamente '+(datas3/diasMili)+ ' para o meu aniversário')








