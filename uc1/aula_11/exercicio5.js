// 5. Crie uma classe Personagem com os atributos nome, energia e nível. Adicione métodos para:

//     Ganhar energia (aumentarEnergia)
//     Perder energia (diminuirEnergia)
//     Subir de nível (subirNivel)

// Depois, crie um personagem e realize algumas ações.

class Personagem {
    constructor(nome, energia, nivel) {
        this.nome = nome;
        this.energia = energia;
        this.nivel = nivel;
    }
    
    ganharEnergia(quantidade) {
        this.energia += quantidade;
        console.log(`${this.nome} ganhou ${quantidade} pontos de energia.`);
    }
    
    perderEnergia(quantidade) {
        if (this.energia - quantidade >= 0) {
            this.energia -= quantidade;
            console.log(`${this.nome} perdeu ${quantidade} pontos de energia.`);
        } else {
            console.log(`${this.nome} não possui energia suficiente para perder ${quantidade} pontos.`);
        }
    }

    subirNivel() {
        if (this.energia >= 100) {
            this.energia -= 100;
            this.nivel++;
            console.log(`${this.nome} subiu de nível! Nível novo: ${this.nivel}`);
        } else {
            console.log(`${this.nome} não possui energia suficiente para subir de nível.`);
        }
    }
}