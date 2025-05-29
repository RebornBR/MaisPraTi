function calcularPrecoDoAluguel(tipoCarro, diasAlugado, kmPercorrido) {
    tipoCarro = tipoCarro.toLowerCase();
    let valorKm;
    if (tipoCarro === "popular") {
        if (kmPercorrido <= 100) {
            valorKm = 0.20;
        } else {
            valorKm = 0.10;
        }
    } else if (tipoCarro === "luxo") {
        if (kmPercorrido <= 200) {
            valorKm = 0.30;
        } else {
            valorKm = 0.25;
        }
    } else {
        console.log("Carro deve ser 'popular' ou 'luxo'");
        return;
    }
    let custoDoAluguel = valorKm * kmPercorrido;
    
    console.log(`Você alugou um carro ${tipoCarro} por ${diasAlugado} dias e percorreu ${kmPercorrido}km.`);
    console.log(`O valor a ser pago é de R$${custoDoAluguel.toFixed(2)}`);
}
let prompt = require("prompt-sync")();
let tipoCarro = prompt("Carro de luxo ou popular? ");
let diasAlugado = Number(prompt("Por quantos dias voce alugou o carro? "));
let kmPercorrido = Number(prompt("Quantos km voce percorreu? "));
calcularPrecoDoAluguel(tipoCarro, diasAlugado, kmPercorrido);