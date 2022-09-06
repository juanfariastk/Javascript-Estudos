
//operador de desestruturação, isto é, tira valores de uma estrutura

let frutinhas = ['maracuja', 'limao', 'morango', 'cajá']

//uso comum de uma variavel pra recuperar um valor...

let frutinha_escolhida = frutinhas[1]

//utilizando o destructuring...

let [a, b, , c, d] = frutinhas //também pulei um indice, so colocar uma virgula com nada entre a próxima virgula..


console.log(a, b, c, d = 'default!')


//usando em um array multidimensional

let algo = [['pera', 'uva', 'maçã'], ['zezinho', 'luizinho']]

let [[f],[,e] ] = algo

console.log(f,e)


// uso em objetos...

let obj_literal = {
    desc:'alguma descrição',
    desc2:'alguma outra descrição',
    desc3:'alguma outra descriçao mais específica',
    desc4:{
        atrib_desc4:' agora a coisa ficou séria em kkk',
        atrib2_desc4:' atributo dentro de atributo, hm kkkkk'
    }
}

//destr...

//let {desc, desc2} = obj_literal

//usando uma variavel nova pra adicionar os valores do objeto

let {desc:d1, desc3:d3,desc4:{atrib_desc4:d4,atrib2_desc4:d5} ,desc5 = 'default!'} = obj_literal

console.log(d1, d3, desc5)
console.log(d4, d5)



//uso do rest/spread com o  destruct...

let array2 = [1,2,3,4,5,6,7,8,9]

let [sp1, , ,...restante_array] = array2

console.log(restante_array)


// uso com objetos + rest/spread
let {desc:r_obj, ...restante_obj} = obj_literal

console.log(r_obj)
console.log(restante_obj)

