// Crie uma classe Livro com os seguintes atributos:

//     titulo
//     autor
//     anoPublicacao

// Adicione um método exibirDetalhes() que imprime as informações do livro.
// Depois, instancie um livro e exiba seus detalhes.

class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicacao = anoPublicacao;
    }

    exibirDetalhes() {
        document.write(`Título: ${this._titulo}`);
        document.write(`Autor: ${this._autor}`);
        document.write(`Ano de publicação: ${this._anoPublicacao}`);
    }
}

// Instância um livro e exibe seus detalhes

let livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1937);
livro1.exibirDetalhes();