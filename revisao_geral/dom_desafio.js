/*
Crie um campo <input type="text"> e aplique os seguintes controles com base nos eventos abaixo:
• No evento de foco modifique o background do input para amarelo.
• Quando o campo perder o foco, recupere o seu respectivo valor e:
o Caso o conteúdo contido no campo tenha menos de 3 caracteres o mesmo deve ter seu background alterado para vermelho.
o Caso o conteúdo contido no campo tenha 3 caracteres ou mais o background deve ser alterado para verde.

*/

function modificaAmarelo(amarelo){
    document.getElementById('textin').style.background = amarelo
}


function trocaBack(){

    document.getElementById('textin').style.background = '#0000FF'

    var toma = document.getElementById('textin').value

    if (toma.length<3){
        document.getElementById('textin').style.background = '#8a2be2'
    } else{
        document.getElementById('textin').style.background = '#005eff'
    }

}




/*
if (getElementById('textin').length<0){

} else{

}
*/
