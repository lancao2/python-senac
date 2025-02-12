// 3. Crie uma classe Produto com os atributos nome, preço e quantidade. Depois, crie um método que exiba os dados do produto.

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    displayInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Quantidade: ${this.quantidade}`);
    }
}