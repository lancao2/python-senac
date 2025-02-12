// 2. Crie uma classe Pessoa com os atributos nome, idade e profissão. Depois, crie uma instância e exiba os dados.

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    displayInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Profissão: ${this.profissao}`);
    }
}