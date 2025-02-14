// 6) Crie uma classe Carro que tenha os atributos marca, modelo e velocidade. Adicione um método para acelerar o carro, aumentando a velocidade em 10 unidades, e outro para exibir a velocidade atual.

class Carro {
    constructor(marca, modelo, velocidade) {
        this._marca = marca;
        this._modelo = modelo;
        this._velocidade = velocidade;
    }

    acelerar() {
        this._velocidade += 10;
    }

    exibeVelocidade() {
        console.log(`Velocidade atual: ${this._velocidade} km/h`);
    }
}

// Teste

const carro1 = new Carro("Fiat", "Uno", 0);
carro1.exibeVelocidade(); 

carro1.acelerar();
carro1.exibeVelocidade(); 