//Dado um sistema que armazena notas de alunos em uma matriz 3x3,
// realize as seguintes atividades:a) Criar uma matriz 3x3 preenchida com valores numéricos representando as notas dos alunos.
// Substituir todas as notas menores que 6 por 6, garantindo que nenhum aluno fique com nota abaixo desse valor.

let notas = [
    [5, 7, 8],
    [9, 3, 6],
    [4, 2, 1]
]

// Substituir notas menores que 6 por 6

for (let i = 0; i < notas.length; i++) {
    for (let j = 0; j < notas[i].length; j++) {
        if (notas[i][j] < 6) {
            notas[i][j] = 6;
        }
    }
}

// escreva em documente

document.write("<table border='1'>");

for (let i = 0; i < notas.length; i++) {
    document.write("<tr>");
    for (let j = 0; j < notas[i].length; j++) {
        document.write("<td>" + notas[i][j] + "</td>");
    }
    document.write("</tr>");
}