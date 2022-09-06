
//criando o exemplo da conta bancária no paradigma orientado a objetos

/*
   entidade = conta bancária
   identidade = não definido ainda
   atributos(características) = agencia, numero da conta, saldo e limite
   métodos(ações) = depositar, sacar e consultar o saldo

*/ 

// definindo o modelo do objeto

class ContaBancaria{

    //definindo os atributos

    constructor(){

        this.agencia = 1000
        this.numeroConta = 881122
        this.saldo = 100
        this.limite = 450

    }


    //criando os metódos

    depositar(valor){

        this.saldo+=valor

    }

    sacar(valor){

        this.saldo-= valor

    }

    consultarSaldo(){

        return this.saldo

    }

}


//definindo a identidade que vai ser instanciado(criado) através da classe

let conta1 = new ContaBancaria()


console.log(conta1.consultarSaldo())

conta1.depositar(200)

console.log(conta1.consultarSaldo())

conta1.sacar(300)

console.log(conta1.consultarSaldo())