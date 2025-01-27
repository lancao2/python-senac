let idade = 15;

if (idade >= 16) {
   console.log("Você pode votar!");
} else {
    console.log("Você ainda não pode votar!");
}

// Monte um programa que informe duas notas de um aluno, calcule a média aritmética, e mostre se o aluno está aprovado ou não, considerando que a média de aprovação é 6 pts.
let alunoNota1 = 7.5;
let alunoNota2 = 8.0;

let media = (alunoNota1 + alunoNota2) / 2

if (media >= 6 ){
    console.log("Aluno Aprovado!")  
} else{
    console.log("Aluno Reprovado!")
}

// Monte um programa que informe dois valores, e considerando que não haverá repetição, informe qual é o maior valor.
let valor1 = 10;
let valor2 = 5;

if (valor1 > valor2){
    console.log("O maior valor é: " + valor1);
} else {
    console.log("O maior valor é: " + valor2);
}

// Monte um programa que informe o nome de um time, e caso o time seja flamengo, informe "Em dezembro de 81, botou os ingleses na roda"

let time = "Flamengo";

if (time == "Flamengo"){
    console.log("Em dezembro de 81, botou os ingleses na roda");
} else{
    console.log("O time é Bairro");
}

// quetão 4 
let alunoSenacNota1 = 7.5;
let alunoSenacNota2 = 8.0;

let mediaSenac = (alunoNota1 + alunoNota2) / 2

if (mediaSenac >= 8 ){
    console.log("Conceito Bom!")   
} else if (mediaSenac >= 6 ){
    console.log("Conceito Regular!")
} else{
    console.log("conceito Insuficiente!")
}

// questão 5

if (media >= 8 ){
    if (mediaSenac){
        console.log("Conceito Otimo!")
    } else { 
        console.log("Conceito Bom!")   
    }
} else if (media >= 6 ){
    console.log("Conceito Regular!")
} else{
    console.log("conceito Insuficiente!")
}

// questão 6
let valor3 = 10

if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3){
    console.log("Alguns valores são iguais!");
}else{
    if (valor1 > valor2){
        if (valor1 > valor3){
            console.log("O maior valor é: " + valor1);
        }
    } else if (valor2 > valor1){
        if (valor2 > valor3){
            console.log("O maior valor é: " + valor2);
        }
    }  else if (valor3 > valor1){
        if (valor3 > valor2){
            console.log("O maior valor é: " + valor3);
        }
    }
}

