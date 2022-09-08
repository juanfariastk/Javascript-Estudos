//criando a classe despesa

class Despesa{

    constructor(dia, mes, ano, tipo, descricao, valor){

        this._dia= dia
        this._mes= mes
        this._ano= ano
        this._tipo= tipo
        this._descricao= descricao
        this._valor = valor

    }

    //validando os dados passados pelo usuário
    valida_dados(){

        for(let i in this){
            if (this[i]== undefined || this[i]=='' ||this[i]==' ' || this[i]==null){

                return false

            } else{

                return true
            }

        }
    }


}


//criando uma classe para receber as despesas de modo dinâmico

class Dados{

    constructor(){

        let id = 0
        
        if (id === 0 ){
            localStorage.setItem('id', 0)
        }
        

    }

    //criando ID dinamico

    define_id(){
        let id_atual = localStorage.getItem('id')
        return parseInt(id_atual)+1
    }
    

    //transformando o objeto em JSON e armazenando ele na localstorage
    
    armazena_despesa(d){

        let id_novo = this.define_id()

        localStorage.setItem(id_novo , JSON.stringify(d))

        localStorage.setItem('id', id_novo)
    }

    //recuperando as despesas 

    recuperarTodosRegistros() {

		//array de despesas
		let despesas = Array()

		let id = localStorage.getItem('id')

		//recuperar todas as despesas cadastradas em localStorage
		for(let i = 1; i <= id; i++) {

			//recuperar a despesa
			let despesa = JSON.parse(localStorage.getItem('id'))

			//existe a possibilidade de haver índices que foram pulados/removidos
			//nestes casos nós vamos pular esses índices
			if(despesa === null) {
				continue
			}

			despesas.push(despesa)
		}

		return despesas
	}

}


//instância da classe dados

let dados = new Dados()


// criando função que recupera os valores da despesa

function cadastra_despesa(){

    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value   
    let dia = document.getElementById('dia').value 
    let tipo = document.getElementById('tipo').value 
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesas = new Despesa(dia, mes, ano, tipo, descricao, valor)

    //passando os dados recuperados para o objeto dados
    if (despesas.valida_dados()===true){

        dados.armazena_despesa(despesas)
        $('#registro_valido').modal('show')

    } else{
        $('#alerta_invalido').modal('show')
    }

    //despesas.valida_dados() === true ? dados.armazena_despesa(despesas) : $('#alerta_invalido').modal('show')

}

function lista_despesas() {

	let despesas = Array()

	despesas = dados.recuperarTodosRegistros() 

	
}
function carrega_lista(despesas = Array(), filtro = false) {

    if(despesas.length == 0 && filtro == false){
		despesas = bd.recuperarTodosRegistros() 
	}
	


	let listaDespesas = document.getElementById("listaDespesas")
    listaDespesas.innerHTML = ''
	despesas.forEach(function(d){

		//Criando a linha (tr)
		var linha = listaDespesas.insertRow();

		//Criando as colunas (td)
		linha.insertCell(0).innerHTML = `${d.dia}/${d.mes}/${d.ano}` 

		//Ajustar o tipo
		switch(d.tipo){
			case '1': d.tipo = 'Alimentação'
				break
			case '2': d.tipo = 'Educação'
				break
			case '3': d.tipo = 'Lazer'
				break
			case '4': d.tipo = 'Saúde'
				break
			case '5': d.tipo = 'Transporte'
				break
			
		}
		linha.insertCell(1).innerHTML = d.tipo
		linha.insertCell(2).innerHTML = d.descricao
		linha.insertCell(3).innerHTML = d.valor

		//Criar o botão de exclusão
		let btn = document.createElement('button')
		btn.className = 'btn btn-danger'
		btn.innerHTML = '<i class="fa fa-times"  ></i>'
		btn.id = `id_despesa_${d.id}`
		btn.onclick = function(){
			let id = this.id.replace('id_despesa_','')
			//alert(id)
			bd.remover(id)
			window.location.reload()
		}
		linha.insertCell(4).append(btn)
		console.log(d)
	})

 }


function pesquisa_despesa(){
	 
	let ano  = document.getElementById("ano").value
	let mes = document.getElementById("mes").value
	let dia = document.getElementById("dia").value
	let tipo = document.getElementById("tipo").value
	let descricao = document.getElementById("descricao").value
	let valor = document.getElementById("valor").value

	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

	let despesas = dados.pesquisar(despesa)
	 
	this.carregaListaDespesas(despesas, true)
}






