// 1. Crie uma classe chamada Moto com os atributos marca, modelo e ano. Depois, crie uma instância da classe e exiba as informações no console.

class Moto {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    displayInfo() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}