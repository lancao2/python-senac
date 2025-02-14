// 5) Crie uma classe Retangulo com largura e altura. Adicione um método que calcule a área (largura × altura) e exiba o resultado

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        const area = this.largura * this.altura;
        document.write(`Área: ${area}`);
    }
}

// em uso

const retangulo = new Retangulo(5, 10);
retangulo.calcularArea(); 

