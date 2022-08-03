//uso de funções anônimas e wrapper
// wrapper (embrulhar funções) é capacidade de associar a variável uma função

var saudacao = function (nome){
    document.write('ola meu doce '+ nome)
}

saudacao('Juan')

// funções de callback
// são função encaminhadas como parâmetros de outras funções

function exibir(id, funcaoSucesso, funcaoErro){
    if (false){
        funcaoSucesso(' sucesso!')
    } else{
        funcaoErro(' deu erro ai fião kkk')
    }
}
var funcaoSucesso = function(msg){
    document.write(msg)
}

var funcaoErro = function(msg){
    document.write(msg)
}
exibir(1, funcaoSucesso, funcaoErro )
