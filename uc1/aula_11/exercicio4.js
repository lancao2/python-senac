// 4. Crie uma classe Filme com os atributos título, diretor e ano de lançamento. Depois, crie um método que exiba as informações do filme.

class Filme {
    constructor(titulo, diretor, anoLancamento) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
    }

    displayInfo() {
        console.log(`Título: ${this.titulo}`);
        console.log(`Diretor: ${this.diretor}`);
        console.log(`Ano de lançamento: ${this.anoLancamento}`);
    }
}