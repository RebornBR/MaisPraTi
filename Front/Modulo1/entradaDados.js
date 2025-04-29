// instalar prompt-sync necessário para usar o prompt fora de um ambiente de navegador
// npm install prompt-sync
const prompt = require('prompt-sync')(); // importa o prompt-sync
// Number converte o valor em um numero
let operacao = Number(prompt("Qual operação voce deseja realizar. Digite 1 para soma, 2 para subtração, 3 para multiplicação e 4 para divisão: "));
let numero1 = Number(prompt("Digite o primeiro numero da operação:  "));
let numero2 = Number(prompt("Digite o segundo numero da operação:  "));

let resultado = 0;

if (operacao == 1) {
    resultado = numero1 + numero2;
} else if (operacao == 2) {
    resultado = numero1 - numero2;
} else if (operacao == 3) {
    resultado = numero1 * numero2;
} else if (operacao == 4) {
    resultado = numero1 / numero2;
    if(numero2 == 0){
        console.log("impossivel dividir por 0");
    }
} else {
    console.log("Operação inválida");
}

// ou usando switch case
/* switch (operacao) {
    case 1:
        resultado = numero1 + numero2;
        break;
    case 2:
        resultado = numero1 - numero2;
        break;
    case 3:
        resultado = numero1 * numero2;
        break;
    case 4:
        if (numero2 == 0) {
            console.log("impossível dividir por 0");
        } else {
            resultado = numero1 / numero2;
        }
        break;
    default:
        console.log("Operação inválida");
} */

console.log("O resultado da sua operação é: " + resultado)