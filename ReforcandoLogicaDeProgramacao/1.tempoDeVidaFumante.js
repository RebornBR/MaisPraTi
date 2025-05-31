const prompt = require('prompt-sync')();

let fumaPorDia = parseInt(prompt("Quantos cigarros você fuma por dia? "));
let quantosAnosFumando = parseInt(prompt("Você fuma há quantos anos? "));

let minutosPerdidos = fumaPorDia * 10 * (quantosAnosFumando * 365);
let tempoDeVidaPerdido = minutosPerdidos / 1440;

console.log(`Você perdeu aproximadamente ${tempoDeVidaPerdido.toFixed(0)} dias de vida devido ao consumo de cigarros.`);