// exemplo com emcapsulamento

class ContaBancaria {
    #saldo
    constructor(titular, saldo) {
        this._titular = titular;
        this.#saldo = saldo;
    }

    depositar(valor){
        this.#saldo += valor;
        document.write("Deposito de R$ " + valor + " realizado <br>")
    }

    consultarSaldo(){
        document.write("Saldo da conta de " + this._titular + ": R$ " + this.#saldo + "<br>")
    }

    sacar(valor){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            document.write("Saque de R$ " + valor + " realizado <br>")
        } else {
            document.write("Saldo insuficiente <br>")
        }
    }

    transferir(valor, destino){
        if(this.#saldo >= valor){
            this.#saldo -= valor;
            destino.depositar(valor);
            document.write("Transferência de R$ " + valor + " para " + destino._titular + " realizada <br>")
        } else {
            document.write("Saldo insuficiente <br>")
        }
    }

}

let conta1 = new ContaBancaria("Alex", 1000);
let conta2 = new ContaBancaria("Davi", 500);

conta1.consultarSaldo();
conta2.consultarSaldo();



