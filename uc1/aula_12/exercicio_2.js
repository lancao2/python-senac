// 2) Crie uma classe Aluno com os atributos:

//     nome
//     idade
//     notas (array de números)

// Implemente um método calcularMedia() que retorna a média das notas.Instancie um aluno e exiba sua média.

class Aluno {
    constructor(nome, idade, notas) {
        this._nome = nome;
        this._idade = idade;
        this._notas = notas;
    }

    calcularMedia() {
        let somaNotas = 0;
        for (let i = 0; i < this._notas.length; i++) {
            somaNotas += this._notas[i];
        }
        document.write(somaNotas / this._notas.length)
    }
}

let aluno1 = new Aluno("John Doe", 18, [8, 7, 9, 10]);
