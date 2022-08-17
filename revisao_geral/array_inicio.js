// array = listas ordenadas 
// variaveis que permitem a relação de itens contidos nela por meio de índices

//montando

/*

var lista = Array();
lista[1]='algo1'
lista[2]='algo2'
lista[3]='algo3'

*/


var lista_quaisquer = Array();

lista_quaisquer[1]='primeiro item'
lista_quaisquer[2]='segundo item'
lista_quaisquer[3]='terceiro item'
lista_quaisquer['x']='quarto item' //.... podendo ser valores numéricos, strings ou booleanos

console.log(lista_quaisquer['x'])



// segunda forma de montar um array

var lista_qualquer = []

lista_qualquer[1]=true
lista_qualquer[2]= 2
lista_qualquer[3]=false

console.log(lista_qualquer[1])



// terceira forma 

var lista_qualq=['oi', true, false, 'oiii!']  // podendo ser com Array('valor', 'valor', 'valor')

console.log(lista_qualq[2])




//atributo length = quantidade de caracteres em uma string, em array ela retorna a quantidade de elementos que tem dentro da array (ele dá o tamanho com base em qual seria o próximo indice...)



//arrays multidimensionais (conceito de matrizes, basicamente...)

var lista_de_coisas = []

lista_de_coisas['alguma coisa']=[]
lista_de_coisas['alguma coisa'][0]= 'alguma coisa dentro de alguma coisa'
lista_de_coisas['alguma coisa'][1]= 'alguma coisa dentro de outra coisa'
lista_de_coisas['alguma coisa'][2]= 'alguma coisa dentro de outras coisas'

lista_de_coisas['algumas coisas']=[]
lista_de_coisas['algumas coisas'][0]= 'agora temos algumas coisas'
lista_de_coisas['algumas coisas'][1]= 'agora temos algumas coisas, dentro de outra coisa'

console.log(lista_de_coisas)

document.write(lista_de_coisas['algumas coisas'][1])




//como incluir itens e excluir itens em uma array

var outra_lista = ['outra1', 'outra2', 'outra3', 'outra4']


// incluindo item no final da array

outra_lista.push('outra5')


//incluindo item no inicio da array

outra_lista.unshift('outra0')

console.log(outra_lista)


// excluindo elemento no final do array

outra_lista.pop()


//excluindo no inicio

outra_lista.shift()

console.log(outra_lista)



//usando uma array multidimensional

var lista_multi = ['algo1', 'algo2']

lista_multi['algo1']=['1','2','3']

lista_multi['algo1'].push('4')
lista_multi['algo1'].unshift('0')

console.log(lista_multi)


//removendo

//lista_multi['algo1'].pop()
//lista_multi['algo1'].shift()

//console.log(lista_multi)



//fazendo uma pesquisa em uma array

var teste_busca = ['0','1','2','3']

console.log(teste_busca.indexOf('2')) // retorna a posição onde está algum item, caso ele não exista, ele retornará -1


//gerando uma estrutura de condição, lembrando que o indexOf é case sensitive...

//pode se usar uma variável para guardar o valor de indexOf para gerar a comparação


if (teste_busca.indexOf('1')==-1){
    console.log('este elemento não existe ou não foi encontrado')

} else{
    console.log('este elemento existe e se encontra na posição ' + (teste_busca.indexOf('1')+1))

}



//ordenando arrays

var teste_ordenar = ['el1', 'al2', 'cl3','dl4']


//utilizando sort() para ordenar, sabendo que o sort organiza no padrão unicode (alfanumerico)

console.log(teste_ordenar.sort())


//ordenando números com uma função e o sort()

var teste_numeros=[1,13,14,15,2,44,56,3,88,99]

function ordenando(a, b){
    return a - b
    // a logica é, caso a conta resulte menor que 0, o valor vem antes de B, caso seja maior, o valor vem antes de A, se houver igualdade, a ordem não será alterada 
    
}

//testando 

console.log(teste_numeros.sort(ordenando))


