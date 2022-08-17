/* estudo do DOM (document object model)

    é uma api que permite o acesso pelo js aos elementos da página (permite a modificação)
    também chamamos a árvore de elementos da página de DOM

*/

/*

alguns dos metodos de seleção de elementos do DOM:

getElementbyId -> recupera um elemento pelo seu ID

getElementsByTagName -> recupera um elemento pelo nome da tag

getElementsByClassName -> recupera um elemento pela sua classe

getElementsByName -> recupera um elemento pelo seu name


*/
/*
console.log(document.getElementById('digite_algo'))

console.log(document.getElementsByTagName('input'))

console.log(document.getElementsByClassName('areatexto'))

console.log(document.getElementsByClassName('texto'))

*/

function divisaoCaracter(){

    var caractere = document.getElementById('digite_algo').value
    document.getElementById('digite_algo').value = ' '
    
    caractere.trim()
/*
    if (caractere=='1' || caractere=='2' || caractere=='3' || caractere=='4' || caractere=='5' || caractere=='6' || caractere=='7' || caractere=='8' || caractere=='9' ||caractere=='0'){
        document.getElementById('numeros1').value += caractere
    } else{
        document.getElementById('letras1').value += caractere
    }
*/

    switch(caractere){

        case '0':
        case '1':
        case '2':
        case '3':       
        case '4':
        case '5':
        case '6':
        case '7':  
        case '8':
        case '9':
            document.getElementById('numeros1').value += caractere
            break
        default:
            document.getElementById('letras1').value += caractere
    
    }   
}
