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

let numero = 9;

if (numero >= 10 && numero <= 20) {
    console.log("Número dentro do intervalo");
} else {
    console.log("Número fora do intervalo");
}

// QUESTÃO 7
// Verificar se um número está dentro de dois intervalos
// Crie um programa que leia um número inteiro e verifique se ele está dentro de dois intervalos:

//     Entre 1 e 10 (inclusive)
//     Entre 50 e 100 (inclusive).

// Imprima "Número válido" se o número estiver em qualquer um desses intervalos, caso contrário, imprima "Número inválido".

if (numero >= 1 && numero <= 10 || numero >= 50 && numero <= 100) {
    console.log("Número válido");
} else {
    console.log("Número inválido");
}

// QUESTÃO 8
//  Verificar se uma pessoa pode comprar bebidas alcoólicas
// Crie um programa que leia a idade de uma pessoa e verifique se ela pode comprar bebidas alcoólicas. As regras são:

// A pessoa pode comprar se tiver 18 anos ou mais
// Se ela tiver entre 16 e 17 anos e estiver acompanhada de um responsável legal.

// Imprima "Pode comprar bebidas" ou "Não pode comprar bebidas", dependendo do caso.

let idadeComprador = 19
let compradorAcompanhado = true

if (idadeComprador >= 18 || (idadeComprador >= 16 && idadeComprador <= 17 && compradorAcompanhado)) {
    console.log("Pode comprar bebidas");
} else {
    console.log("Não pode comprar bebidas");
}

// QUESTÃO 9
// Verificar se uma pessoa pode tirar férias
// Crie um programa que leia o tempo de serviço (em meses) de um funcionário e verifique se ele pode tirar férias. As condições para tirar férias são:

//     Ter mais de 1 ano de serviço
//     Estar no mínimo 6 meses trabalhando no cargo atual.

// Imprima "Pode tirar férias" ou "Não pode tirar férias", dependendo do caso.

let tempoDeServico = 12
let minimoMesesTrabalhando = 3

if (tempoDeServico >= 12 && minimoMesesTrabalhando >= 6) {
    console.log("Pode tirar férias");
} else {
    console.log("Não pode tirar férias");
}

// QUESTÃO 10
// Verificar se uma pessoa pode dirigir ou votar
// Crie um programa que leia a idade de uma pessoa e verifique se ela pode dirigir ou votar. As regras são:

//     A pessoa pode dirigir se tiver 18 anos ou mais.
//     A pessoa pode votar se tiver 16 anos ou mais (voto opcional entre 16 e 17 anos e obrigatório a partir de 18 anos).

// Imprima "Pode dirigir" se a pessoa puder dirigir, "Pode votar" se a pessoa puder votar, ou "Não pode nem dirigir nem votar" caso contrário.

let idadePessoa = 18
let podeVotar = false

if (idadePessoa > 0){
    if (idadePessoa >= 16 && idadePessoa <= 17 || idadePessoa >= 18 ) {
        podeVotar = true;
    }
    
    if (idadePessoa >= 18 && podeVotar) {
        console.log("Pode dirigir e Pode votar");
    } else if (idadePessoa >= 16 && idadePessoa <= 17 ) {
        console.log("Pode Votar mas Não pode Dirigir");
    } else {
        console.log("Não pode nem dirigir nem votar");
    }
} else {
    console.log("Idade inválida");
} 

