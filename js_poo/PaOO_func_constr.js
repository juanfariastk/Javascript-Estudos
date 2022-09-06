// uso de funções construtoras para criar objetos, sendo a terceira forma de se criar um objeto
// lembrando: 1 - objetos criados por classe, 2- objetos criados de forma literal e 3 - objetos criados por funções construtoras

let Objeto_novo = function(atb1, atb2, atb3){
    this.atributo1 = atb1
    this.atributo2 = atb2 
    this.atributo3 = atb3

    //criando metodos em funcao construtora
    this.acesso = ()=> console.log(this.atributo1, this.atributo2, this.atributo3)
    this.setAtributos = (atributo, novo_valor) => {
        if(atributo==1){
            this.atributo1 = novo_valor

        } else if (atributo==2){
            this.atributo2 = novo_valor

        } else if (atributo==3){
            this.atributo3 = novo_valor

        } else{
            console.log('digite um atributo valido')

        }
    }  


}

let objeto_novo_instancia = new Objeto_novo(1, 2, 'sla')

console.log(objeto_novo_instancia)

objeto_novo_instancia.setAtributos(3, 1234)
objeto_novo_instancia.setAtributos(1, 'sla')
objeto_novo_instancia.setAtributos(2, 134.2)

console.log(objeto_novo_instancia)

objeto_novo_instancia.acesso()


//encapsulando atributos em funções construtoras 
//devido ao escopo de variaveis da função, não tem como elas serem alteradas fora da própria função..
 

let Carro = function(){
    this.cor = 'azul'
    this.modelo = 'camaro'
    this.velocidade_atual = 0
    const velocidade_max = 318

    this.acelera = function(){
        if (this.velocidade_atual<= velocidade_max){
            let velocidade_nova = this.get_velocidade_atual() + 30
            this.set_velocidade_atual(velocidade_nova)

        } else{
            this.set_velocidade_atual(velocidade_max)

        }
        
    }

    this.get_velocidade_atual= () => this.velocidade_atual
    
    this.set_velocidade_atual = (nova) => nova<=velocidade_max ? this.velocidade_atual = nova : this.velocidade_atual = velocidade_max, console.log('a velocidade agora está no máximo!')

}

let carro1 = new Carro()

carro1.acelera()
carro1.acelera()

console.log(carro1)

console.log(carro1.set_velocidade_atual(120))
console.log(carro1.get_velocidade_atual())

carro1.acelera()

console.log(carro1.get_velocidade_atual())

carro1.acelera()
carro1.acelera()
carro1.acelera()
carro1.acelera()
carro1.acelera()
carro1.acelera()

console.log(carro1.get_velocidade_atual())


