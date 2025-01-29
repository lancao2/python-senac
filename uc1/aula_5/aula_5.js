// Solicita o nome do usuário
// let nome = prompt("Qual é o seu nome?"); 
// alert(`Olá, ${nome}!`); // Imprime a mensagem na tela
// console.log(`Olá, ${nome}!`); // Imprime a mensagem no console
// document.write(`Olá, ${nome}!`); // Imprime a mensagem no documento HTML

// Exercicio 1
// Leia dois valores e exiba a soma deles.

// let valor1 = prompt("Digite o primeiro valor:");
// let valor2 = prompt("Digite o segundo valor:");
// let soma = 0;

// // verifique se a soma é  maior ou menor que 20
// if (valor1.trim() == '' || valor2.trim() == '') {
//     alert("Os valores devem ser preenchidos !");
// } else {
//     valor1 = parseInt(valor1);
//     valor2 = parseInt(valor1)

//     soma = valor1 + valor2
//     condicional = soma > 20 ? "maior" : soma < 20 ? "menor" : "igual"
//     document.write(`A soma dos valores ${valor1} e ${valor2} é: ${valor1 + valor2} esse valor é ${condicional} que 20`);
// }

let questão = prompt("Qual questão você deseja responder?");

switch (parseInt(questão)) {
    case 1:
        //Questão 1 = ler 3 valores e verificar se podem ser lados de um triangulo e informar caso afirmativo, qual é o triangulo
        let lado1 = prompt("Digite o primeiro lado do triângulo:");
        let lado2 = prompt("Digite o segundo lado do triângulo:");
        let lado3 = prompt("Digite o terceiro lado do triângulo:");
        let tipoTriangulo = "";

        if (lado1.trim() == '' || lado2.trim() == '' || lado3.trim() == '') {
            alert("Os valores dos lados devem ser preenchidos!");
        } else {
            lado1 = parseInt(lado1);
            lado2 = parseInt(lado2);
            lado3 = parseInt(lado3);
            if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
                if (lado1 == lado2 && lado2 == lado3) {
                    tipoTriangulo = "Equilátero";
                } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
                    tipoTriangulo = "Isósceles";
                } else {
                    tipoTriangulo = "Escaleno";
                }
                document.write(`Os lados formam um triângulo ${tipoTriangulo}`);
            }
        }
        break;
    case 2:
        // ler altura e peso, e informar o imc e qual a situação do indivíduo

        let altura = prompt("Digite a altura:");
        let peso = prompt("Digite o peso:");

        if (peso.trim() == '' || altura.trim() == '') {
            alert("Os valores devem ser preenchidos!");
        } else {
            let imc = peso / (altura * altura);
            document.write(`O IMC é: ${imc.toFixed(2)}`);
        }
        break;
    case 3:
        // Solicitar a idade do usuário e informa se ele é maior ou menor de idade.

        let idade = prompt("Digite a idade:");

        if (idade.trim() == '') {
            alert("A idade deve ser preenchida!");
        } else {
            if (parseInt(idade) >= 18) {
                document.write("Você é maior de idade");
            } else {
                document.write("Você é menor de idade");
            }
        }
        break;
    case 4:
        //  Solicita um valor e um percentual de desconto, e calcula o valor final.
        let valorInicial = prompt("Digite o valor inicial:");
        let percentualDesconto = prompt("Digite o percentual de desconto:");

        if (valorInicial.trim() == '' || percentualDesconto.trim() == '') {
            alert("Os valores devem ser preenchidos!");
        } else {
            let valorFinal = parseFloat(valorInicial) * (1 - (parseFloat(percentualDesconto) / 100));
            document.write(`O valor final é: ${valorFinal.toFixed(2)}`);
        }
        break;

    case 5:
        // Lê um número e informa se ele é par ou ímpar

        let numero = prompt("Digite um número:");

        if (isNaN(numero) || numero.trim() == '') {
            alert("O valor informado não é um número!");
        } else {
            if (numero.trim() == '') {
                alert("Os valores devem ser preenchidos !");
            } else {
                if (parseInt(numero) % 2 == 0) {
                    document.write("O número é par");
                } else {
                    document.write("O número é ímpar");
                }
            }
        }
        break;


    case 6:
    // Solicita dois números e informa qual é o maior.
        let num1 = prompt("Digite o primeiro número:");
        let num2 = prompt("Digite o segundo número:");


        if (num1.trim() == '' || num2.trim() == '') {
            alert("Os valores devem ser preenchidos!");
        } else {
            num1 = parseInt(num1);
            num2 = parseInt(num2);

            if (num1 > num2) {
                document.write(`O maior número é: ${num1}`);
            } else if (num1 < num2) {
                document.write(`O maior número é: ${num2}`);
            } else {
                document.write("Os números são iguais");
            }
        }
        break;
    case 7: 
        // Solicita três números e calcula a média.
        let num3 = prompt("Digite o primeiro número:");
        let num4 = prompt("Digite o segundo número:");
        let num5 = prompt("Digite o terceiro número:");

        if (num3.trim() == '' || num4.trim() == '' || num5.trim() == '') {
            alert("Os valores devem ser preenchidos!");
        } else {
            num3 = parseInt(num3);
            num4 = parseInt(num4);
            num5 = parseInt(num5);
            let media = (num3 + num4 + num5) / 3;
            document.write(`A média dos números é: ${media.toFixed(2)}`);
        }

        break;
    case 8:
        // Verifica se uma pessoa tem idade suficiente para dirigir.
        let idadeCondutor = prompt("Digite a sua Idade:");

        if (idadeCondutor.trim() == '') {
            alert("A idade deve ser preenchida!");
        } else {
            idadeCondutor = parseInt(idadeCondutor);

            if (idadeCondutor >= 18) {
                document.write("Você pode dirigir");
            }else {
                document.write("Você não pode dirigir");
            }
        }

}










