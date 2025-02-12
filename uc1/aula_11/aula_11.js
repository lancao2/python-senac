// aula sobre POO

class Carro {
    constructor(marca, modelo, cor){
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
    }

    // metodo
    acelerar(){
        document.write("Acelerando o carro...");
    }

    frear(){
        document.write("Freando o carro...");
    }
}

// criando um novo carro

let myCarro = new Carro("Fiat", "Uno", "Vermelho");

myCarro.acelerar(); // Acelerando o carro...

myCarro.frear(); // Freando o carro...
