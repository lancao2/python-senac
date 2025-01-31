
const userInput = parseInt(prompt("Celecione uma atividade:"));

switch (userInput) {
    case 1:
        // listar as marcas dos carros
        const marcasCarros = ["BMW", "Mercedes", "Fiat", "Ford", "Chevrolet"];
        for (let i = 0; i < marcasCarros.length; i++) {
            document.write(marcasCarros[i] + "<br>");
        }
        break;
    case 2:
        const marcasCarrosForIn = ["BMW", "Mercedes", "Fiat", "Ford", "Chevrolet"];
        for (i in marcasCarrosForIn) {
            document.write(i+" - ");
            document.write(marcasCarrosForIn[i] + "<br>");
        }

}
