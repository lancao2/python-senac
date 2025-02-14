// 3) Crie uma classe Televisao com os atributos:

//     canalAtual
//     volume

// Crie os métodos:

//     aumentarVolume() (até 100)
//     diminuirVolume() (até 0)
//     mudarCanal(novoCanal)

// Depois, simule a troca de canal e ajuste de volume.

class Televisao {
    constructor(canalAtual, volume) {
        this._canalAtual = canalAtual;
        this._volume = volume;
    }

    aumentarVolume() {
        if (this._volume < 100) {
            this._volume++;
        }
    }

    diminuirVolume() {
        if (this._volume > 0) {
            this._volume--;
        }
    }

    mudarCanal(novoCanal) {
        this._canalAtual = novoCanal;
    }
}

// Simulando a troca de canal e ajuste de volume

const televisao = new Televisao(1, 50);

document.write(`Canal atual: ${televisao._canalAtual}`);
document.write(`Volume: ${televisao._volume}`);