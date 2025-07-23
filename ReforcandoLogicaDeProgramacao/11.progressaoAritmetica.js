const prompt = require("prompt-sync")();
let primeiroTermo = Number(prompt("Digite o primeiro termo da PA: "));
let razao = Number(prompt("Digite a razao da PA: "));
let termosPA = [];
let numero = primeiroTermo;
termosPA.push(primeiroTermo);

for(let i = 1; i < 10; i++){
    numero+= razao;
    termosPA.push(numero);
}
console.log(termosPA);