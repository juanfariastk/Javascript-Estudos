//criando função com possibilidade de default (caso nao haja parametros)

function teste_funcao(nobre ='Juan', cuidado = 'com o poste'){

    document.write(`testando ai meu nobre ${nobre}, apenas tome cuidado ${cuidado}`)

}

teste_funcao(undefined, 'com as pombas')