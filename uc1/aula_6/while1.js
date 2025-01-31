// estrutura de repetição
// contar de 0 a 10
const userInput = parseInt(prompt("Celecione uma atividade:"));

switch (userInput) {
    case 1:
        // contar ate 10 com while
        let contador = 0;

        while (contador <= 10) {
            document.write(contador + "<br>");
            contador++;
        }
        break;

    case 2:
        // contar ate 10 com while
        let contadorBreak = 0;

        while (true) {
            document.write(contadorBreak + "<br>");
            contadorBreak++;
            if (contadorBreak === 11) break;
        }
        break;

    case 3:
        // Realize um cadastro simples com while
        let nome, cadastro = "";
        let continua = true;
        let i = 0;
        while (continua) {
            nome = prompt("Digite o nome:");
            cadastro += nome + "<br>";
            i++
            continua = confirm("Deseja continuar?");
        }
        document.write(`Você realizou ${i} cadastros. <br>`);
        document.write(cadastro);
        break
    case 4:
        // contar ate 10 com do-while
        let numeros = 0 
        do {
            document.write(numeros + "<br>");
            numeros++
        } while (numeros <= 10);
}

