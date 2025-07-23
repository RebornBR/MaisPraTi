const prompt = require("prompt-sync")();
let continuar = "sim";
let numeroUsuario;
let numeros = [];
let numerosPar = [];
let menorNumero;
let mediaNumero;
let somaNumeros = 0;
do {
    numeroUsuario = Number(prompt("Digite um numero: "));
    numeros.push(numeroUsuario);
    if (numeroUsuario % 2 === 0) {
        numerosPar.push(numeroUsuario);
    }
    continuar = prompt("Digite 'n' para sair: ");
    if (continuar === "n") {
        numeros.sort((a, b) => a - b);
        menorNumero = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            somaNumeros += numeros[i]
        }
        mediaNumero = somaNumeros / numeros.length;
        // ✅ Exibindo os resultados
        console.log("Números digitados:", numeros);
        console.log("Números pares:", numerosPar);
        console.log("Menor número:", menorNumero);
        console.log("Média dos números:", mediaNumero.toFixed(2));

    }
} while (continuar != 'n')