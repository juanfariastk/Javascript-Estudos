// tratamento de erros com try, catch, finally e throw

// cria uma pseudo reatividade aos erros

var teste = []

teste[1]=[]
teste[1]['teste1']= 'alguma coisa'
teste[1]['teste2']= ' outra coisa'

function tes_test(variavel){

    // pode se usar o try quantas vezes for preciso, tem lógica parecida com um if else
    // try testa, catch guarda o erro em uma variável e o finally toma uma ação caso o try apresente erro

    try{
        console.log(teste[0]['teste1'])

    } catch(y){

        tratando_erro(y)
        //utilizando o throw para interromper o processamento do código, pode ser usado no inicio do código, fora do catch

        throw new Error ('relaxa ai, na próxima da certo!')
        
        console.log('pegamos o número do seu erro para solucionar')

    }
        finally{
        console.log('a aplicaçao deu erro, mas ainda funciona')

    }
    
    console.log('tudo vai bem! ')

    //tratando o erro guardando na variavel 'y' em catch com uma função

    function tratando_erro(y){
        console.log(y+' este erro foi enviado com sucesso para o servidor')
    }

}


tes_test(teste)


