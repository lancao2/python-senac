// Crie um programa que para receber um numero de 1 a 7 e retornar o dia da semana correspondente.

let numeroDaSemana = 10;

switch (numeroDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-Feira");
        break;
    case 3:
        console.log("Terça-Feira");
        break;
    case 4:
        console.log("Quarta-Feira");
        break;
    case 5:
        console.log("Quinta-Feira");
        break;
    case 6:
        console.log("Sexta-Feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Informe um número de 1 a 7.");
        break;  
}

// QUESTÃO 2
// Calculadora Simples
// Crie um programa que recebe dois números e uma operação (+, -, *, /) e retorna o resultado correspondente.

let num1 = 10;
let num2 = 5;
let operacao = "Multiplicacao";

switch (operacao) {
    case "Multiplicacao":
        console.log(num1 * num2);
        break;
    case "Adicao":
        console.log(num1 + num2);
        break;
    case "Subtracao":
        console.log(num1 - num2);
        break;
    case "Divisao":
        console.log(num1 / num2);
        break
}





// QUESTÃO 3
// Identificar o Mês pelo Número
// Crie um programa que recebe um número de 1 a 12 e imprime o nome do mês correspondente.

let numeroDoMes = 7;

switch (numeroDoMes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Número inválido. Informe um número de 1 a 12.");
        break;
}

// QUESTÃO 4
// Classificar Idade em Faixas Etárias

let idade = 20;

switch (true) {
    case (idade >= 0 && idade <= 12 ):
        console.log("Criança");
        break;
    case (idade > 12 && idade <= 19):
        console.log("Adolescente");
        break;
    case (idade > 19 && idade <= 65):
        console.log("Adulto");
        break;
    default:
        console.log("Idoso");
        break;
}

// QUESTÃO 5
// Crie um programa que informa através do código da categoria do produto, o tipo de produto:
// 1 - alimento perecível
// 2 - bebida
// 3 - limpeza
// 4. higiene pessoal

let codigoDoProduto = 1;

switch (codigoDoProduto) {
    case 1:
        console.log("Alimento perecível");
        break;
    case 2:
        console.log("Bebida");
        break;
    case 3:
        console.log("Limpeza");
        break;
    case 4:
        console.log("Higiene pessoal");
        break;
    default:
        console.log("Código inválido. Informe um código válido (1-4).");
        break;
}

// QUESTÃO 6
// Crie um programa que leia um número inteiro e verifique se ele está dentro do intervalo de 10 a 20 (inclusive). 
// Se o número estiver dentro do intervalo, imprima "Número dentro do intervalo", caso contrário, imprima "Número fora do intervalo".

let numero = 15;

if (numero >= 10 && numero <= 20) {
    console.log("Número dentro do intervalo");
} else {
    console.log("Número fora do intervalo");
}