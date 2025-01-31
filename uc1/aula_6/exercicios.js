const userInput = parseInt(prompt("Celecione uma atividade:"));

switch (userInput) {
    case 1:
        // //  Crie um programa que utilize um loop while para exibir os números de 1 a 20 na tela.
        let contador = 1;
        while (contador <= 20) {
            document.write(contador + "<br>");
            contador++;
        }
        break;

    case 2:
        // Utilize um loop for para exibir todos os números ímpares de 1 a 15.
        for (let i = 1; i <= 15; i += 2) {
            document.write(i + "<br>");
        }
        break;

    case 3:
        // Crie um programa que utilize um do...while para exibir uma contagem regressiva de 10 até 1.
        let countdown = 10;
        do {
            document.write(countdown + "<br>");
            countdown--;
        } while (countdown >= 1);
        break;

    case 4:
        // Solicite ao usuário 5 números usando prompt e exiba a soma total 
        let sum = 0;
        for (let i = 0; i < 5; i++) {
            let num = parseInt(prompt(`Digite o ${i + 1}º número:`));
            sum += num;
        }
        document.write(`A soma dos números é: ${sum}`);
        break;

    case 5:
        // Solicite um nome ao usuário e peça a quantidade de vezes que ele deseja exibi-lo na tela. Utilize um loop while.
        let name = prompt("Digite seu nome:");
        let times = parseInt(prompt("Quantos vezes deseja mostrar seu nome?"));

        while (times > 0) {
            document.write(name + "<br>");
            times--;
        }
        break;

    case 6:
        // Solicite ao usuário um número e exiba a tabuada desse número de 1 a 10
        let number = parseInt(prompt("Digite um número:"));
        for (let i = 1; i <= 10; i++) {
            document.write(`${number} x ${i} = ${number * i}<br>`);
        }
        break;
    case 7:
        // Exiba todos os números pares de 2 a 20 utilizando um loop do...while.
        let count = 2;
        do {
            document.write(count + "<br>");
            count += 2;
        } while (count <= 20);
        break;

    case 8:
        //  Leia o nome do time de 10 torcedores, e ao final informe quantos são flamenguistas, vascaínos, tricolores, botafoguenses, ou outro time.
        let flamenguistas = 0;
        let vascaianos = 0;
        let tricolores = 0;
        let botafoguenses = 0;
        let outroTime = 0;

        for (let i = 0; i < 10; i++) {
            let time = prompt(`Digite o nome do ${i + 1}º time:`);
            switch (time) {
                case "Flamengo" || "flamenguinhos":
                    flamenguistas++;
                    break;
                case "Vasco da Gama" || "vasco da gama":
                    vascaianos++;
                    break;
                case "Corinthians" || "corinthians":
                    tricolores++;
                    break;
                case "Botafogo" || "botafogo":
                    botafoguenses++;
                    break;
                default:
                    outroTime++;
                    break;
            }
        }

        document.write(`Flamenguistas: ${flamenguistas}<br>`);
        document.write(`Vascaianos: ${vascaianos}<br>`);
        document.write(`Tricolos: ${tricolores}<br>`);
        document.write(`Botafoguenses: ${botafoguenses}<br>`);
        document.write(`Outro time: ${outroTime}<br>`);
        break;

    case 9:
        // Leia o salario e o sexo de n funcionários, e ao final informe:
        // - qtd de funcionários de cada sexo
        // - a soma do salário das mulheres
        // - a soma do salário dos homens
        // - a média salarial dessa empresa
        // - o programa termina quando for digitado "fim"
        
        let continuar = true;
        let qtdHomens = 0;
        let qtdMulheres = 0;
        let somaSalarioMulheres = 0;
        let somaSalarioHomens = 0;
        let mediaSalarial = 0;
        let index = 0
        
        let sexo;
        let salario;
        
        do {
            sexo = prompt("Digite o sexo (M/F):");
            salario = parseFloat(prompt("Digite o salário:"));
            
            if (sexo.toLowerCase() === 'f') {
                qtdMulheres++
            } else if (sexo.toLowerCase() ==='m') {
                qtdHomens++;
            } else{
                alert("Sexo inválido. Digite 'M' para masculino ou 'F' para feminino.");
                location.reload();
            }

            if (sexo.toLowerCase() === 'f') {
                somaSalarioMulheres += salario;
            } else if (sexo.toLowerCase() ==='m') {
                somaSalarioHomens += salario;
            } else {
                alert("Sexo inválido. Digite 'M' para masculino ou 'F' para feminino.");
                location.reload();
            }
            index++
            
            continuar = confirm("Deseja cadastrar um novo funcionário?");
            
            
        } while (continuar);
        
        mediaSalarial = (somaSalarioHomens + somaSalarioMulheres) / i;
        console.error("Atividade 9 é implementada.");
        
        document.write(`Qtd de funcionários do sexo masculino: ${qtdHomens}<br>`);
        document.write(`Qtd de funcionários do sexo feminino: ${qtdMulheres}<br>`);
        document.write(`Soma do salário das mulheres: ${somaSalarioMulheres}<br>`);
        document.write(`Soma do salário dos homens: ${somaSalarioHomens}<br>`);
        document.write(`Média salarial: ${mediaSalarial}<br>`);
        break;

    default:
        document.write("Atividade não encontrada.");
        break;

}