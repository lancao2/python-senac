// 6. Crie uma classe Produto com os atributos:

//     nome (Nome do produto)
//     preco (Preço do produto)
//     estoque (Quantidade disponível em estoque)

// Adicione os seguintes métodos:

//     vender(quantidade): Reduz a quantidade do estoque, se houver disponibilidade.
//     reporEstoque(quantidade): Aumenta a quantidade do estoque.
//     exibirInfo(): Exibe as informações do produto.

class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    
    vender(quantidade) {
        if (this.estoque >= quantidade) {
            this.estoque -= quantidade;
            console.log(`Vendeu ${quantidade} unidades de ${this.nome}`);
        } else {
            console.log(`Não há ${quantidade} unidades disponíveis em estoque`);
        }
    }
    
    reporEstoque(quantidade) {
        this.estoque += quantidade;
        console.log(`Repor ${quantidade} unidades de ${this.nome} no estoque`);
    }
    
    exibirInfo() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Preço: ${this.preco}`);
        console.log(`Estoque: ${this.estoque}`);
    }
}