let prompt = require('prompt-sync')();

function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;
    if (sexo.toLowerCase() === 'masculino') {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo.toLowerCase() === 'feminino') {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        return console.log("Sexo inválido. Por favor, insira 'masculino' ou 'feminino'.");
    }
    return console.log(`Seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`);
}

let altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75): "));
let sexo = prompt("Digite seu sexo (masculino/feminino): ");
calcularPesoIdeal(altura, sexo);


