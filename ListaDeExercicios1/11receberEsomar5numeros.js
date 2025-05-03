const prompt = require('prompt-sync')();
let numero;
let resultado = 0;
for(let i = 1; i <= 5; i++){
    numero = Number(prompt("Digite um número; "));
    resultado +=numero;
}
console.log(resultado);