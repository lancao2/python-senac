// Commentar linha

/*
Comentario em bloco
Comentario em bloco
Comentario em bloco

*/
nome = 'Alex'; // Declarando variável nome
sobrenome = 'Lanção'; // Declarando variável sobrenome
telefone = 2199999-9999
email = 'alex@example.com'
nascimento = new Date('1990-01-01')

produto = "Iphone 13"
valorUnit = 3500.00


// questão 1
console.log(`Hello, World! ${nome} ${sobrenome}` ); // Imprime 'Hello, World! Alex Lanção' no console

// questão 2
console.log(`
Nome: ${nome}
Telefone: ${telefone}
Email: ${email}
Nascimento: ${nascimento.toLocaleDateString('pt-BR')}
`); // Imprime os dados na tela formatados

// questão 3
console.log(`
Nome do Produto: ${produto}
Valor Unitário: R$ ${valorUnit}
`); // Imprime os dados do produto na tela formatados

// Ex. 4
let valor1 = 5
let valor2 = 10
let soma = valor1 + valor2
console.log(`A soma é: ${soma}`); // Imprime a soma dos valores

// Ex. 5

let dobro = valor2 * valor1
console.log(`O dobro do número ${valor2} é: ${dobro}`); // Imprime o dobro do número

// Ex. 6 
let metade = valor2 / valor1
console.log(`A metade do valor ${valor2} é : ${metade}`); // Imprime a metade do número

// Ex. 7
let resto = valor2 % valor1
console.log(`O resto da divisão do valor ${valor2} por 3 é: ${resto}`); // Imprime o resto da divisão

// Ex. 8
let subtracao = valor2 - valor1
console.log(`O resto da divisão do valor ${valor2} por 3 é: ${resto}`); // Imprime o resto da divisão

// questão 4
// Crie um programa que receba dois valores e realize as operações de soma, subtração, multiplicação e divisão



// questão 5
// Calculadora de Média: Um programa que calcula a média de um dois números fornecidos pelo usuário.

const num1 = 10
const num2 = 5
let somaMedia = num1 + num2
let media = somaMedia / 2 
console.log(`A Média é: ${media}`)

// questão 6
// Calculadora de IMC: Um programa que calcula o Índice de Massa Corporal (IMC) com base no peso e altura.

const peso = 66
const altura = 1.78
let imc = peso / (altura * altura)
console.log(`O IMC é: ${imc.toFixed(2)}`)

// questão 7
// Conversor de Unidades: Um programa que converte centímetros para metros.

const centimetros = 1000
let metros = centimetros / 100
console.log(`O valor em metros é: ${metros}m`)

// questão 8
// Área de um Retângulo: Ler a altura e a largura e calcular a área do retângulo

const alturaRetangulo = 5
const larguraRetangulo = 10
let areaRetangulo = alturaRetangulo * larguraRetangulo
console.log(`A área do retângulo é: ${areaRetangulo}m²`)

// questão 9
// Área de um Triângulo: Ler a base e a altura e calcular a área do triângulo

const baseTriangulo = 5
const alturaTriangulo = 10
let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2
console.log(`A área do triângulo é: ${areaTriangulo}m²`)

// questão 10
// Volume de uma Caixa: Ler comprimento, altura e a largura, e calcular o volume de uma caixa

const comprimentoCaixa = 5
const alturaCaixa = 10
const larguraCaixa = 15
let volumeCaixa = comprimentoCaixa * alturaCaixa * larguraCaixa
console.log(`O volume da caixa é: ${volumeCaixa}M³`)

