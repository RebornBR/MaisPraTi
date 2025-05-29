function adivinheOnumero(numero){
let numeroAleatorio = Math.ceil(Math.random()* 5); // gera um aleatorio entre 0 e 1(max 0.99), multiplica por 5 e arredonda para cima com o math.ceil
if(numero === numeroAleatorio){
    console.log("Voce adivinhou, parabens!");
}else{
    console.log("Voce nao adivinhou!");
}
console.log(`Numero escolhido: ${numero}, numero gerado aleatoriamente; ${numeroAleatorio}`);
}

let prompt = require("prompt-sync")();
let numero = Number(prompt("Digite um número: "));
adivinheOnumero(numero);