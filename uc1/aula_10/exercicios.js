let oceanMatrix = [];
for (let i = 0; i < 5; i++) {
    oceanMatrix[i] = [];
    for (let j = 0; j < 5; j++) {
        oceanMatrix[i][j] = 0;
    }
}

let shipRow = Math.round(Math.random()*5);
let shipColumn = Math.round(Math.random()*5);

let attPlayerRow = parseInt(prompt(" Infome a linha:"))
let attPlayerColumn = (prompt(" Infome a Coluna:"))

if (attPlayerRow == shipRow && attPlayerColumn == shipColumn) {
    alert("Você acertou o navio!");
} else {
    alert(`Você errou! O navio esta Linha: ${shipRow}, Coluna: ${shipColumn}`);
}