const prompt = require('prompt-sync')();

let numeros = [];
let numero;
for (let i = 0; i < 10; i++) {
  let numero = Number(prompt('Digite um número inteiro: '));
  numeros.push(numero);
}

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`numeros[${i}] = ${numeros[i]}`);
    } 
}
