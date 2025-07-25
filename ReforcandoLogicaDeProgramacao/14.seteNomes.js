const prompt = require('prompt-sync')();
let nome;
let nomes = [];
for(let i = 0; i < 7; i++){
    nome = prompt("Digite um nome: ");
    nomes.push(nome);
}

console.log("Nomes em reverso:");
console.log(nomes.reverse())