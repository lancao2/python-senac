const userInput = parseInt(prompt("Celecione uma atividade:"));

switch (userInput) {
    case 1:
        // conte ate 10 usando um loop for
        for (let i = 0; i<= 10; i++){
            document.write(i+"<br>");
        }
        break;
    case 2:
        // Realize um cadastro simples com while
        let nome, cadastro = "";
        for (let i = 0; i <= 3; i++) {
            nome = prompt("Digite o nome:");
            cadastro += nome + "<br>";
        }
        document.write(cadastro);
}