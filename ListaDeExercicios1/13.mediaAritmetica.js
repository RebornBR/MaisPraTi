const prompt = require('prompt-sync')();
let total = 0;
let resultado= 0;
console.log("Digite 0 para sair")
let numero = 0;
let i = 0;
do{
    numero = Number(prompt("Digite um número: "));
    total += numero;
    resultado = total / i;
    if(numero === 0){
        break;
    }
    i++
}while(numero !== 0)
console.log("Média: " + resultado);