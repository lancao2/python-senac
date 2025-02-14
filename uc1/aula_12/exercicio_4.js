// 4) Crie uma classe Produto que tenha os atributos nome e preco. Depois, crie um método que aplique um desconto de 10% ao preço e exiba o valor final

class Produto {
    constructor(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }

    aplicarDesconto() {
        const desconto = this._preco * 0.10;
        const precoFinal = this._preco - desconto;

        document.write(`Preço final do produto "${this._nome}": R$ ${precoFinal.toFixed(2)}`);
    }
}

// Exemplo de uso

const produto1 = new Produto("Camisa", 150);
produto1.aplicarDesconto(); 

const produto2 = new Produto("Camiseta", 200);
produto2.aplicarDesconto(); 