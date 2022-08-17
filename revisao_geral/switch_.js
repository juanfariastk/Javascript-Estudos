// estutura condicional parecida com o if, porém só compara identicos

/* formato do switch 

    var variavel =1 

    switch (alguma opção){

        case 1:
            break
        
        case 2:
            break
        
        default:
            break

    }
*/

var parametro = 1

switch (parametro){

    case 1:
        document.write('parametro foi identificado como 1')
        break
    case 3:
        document.write('parametro foi identificado como 3')
        break
    default:
        document.write('não encontrado')
        break

}