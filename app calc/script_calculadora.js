// criando a função de calculo inicial

function calculo(tipo, valor){
    
    if(tipo==='acao'){

        if(valor==='c'){
            document.getElementById('visor').value=''
        }

        if(valor==='+' || valor==='-' || valor==='/' || valor==='*' || valor==='.'){
            document.getElementById('visor').value += valor

        }

        if(valor==='='){
          var resultado_fim = eval(document.getElementById('visor').value)
          document.getElementById('visor').value=resultado_fim

        }

    } else if (tipo==='valor'){
        document.getElementById('visor').value += valor 
    }
}