// exemplo Matriz

let matrizEx = [
    [1,2,3],
    [4,6,5],
    [7,8,9]
]
console.log(matrizEx)

// monte uma matriz 3x3 que preenche o seu conteudo via prompt

let matriz = []

for (let i = 0; i < 3; i++) {
    let row = []
    for (let j = 0; j < 3; j++) {
        row.push(prompt(`Digite o elemento ${i+1},${j+1}`))
    }
    matriz.push(row)
}

document.write("<table>")
for (let i = 0; i < matriz.length; i++) {
    document.write("<tr>")
    for (let j = 0; j < matriz[i].length; j++) {
        document.write(`<td>${matriz[i][j]}</td>`)
    }
    document.write("</tr>")
}




