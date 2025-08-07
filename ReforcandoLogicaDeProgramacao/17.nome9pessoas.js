const prompt = require('prompt-sync')();

let nomesPessoas = [];
let idadePessoas = [];
let nome;
let idade;
for (let i = 0; i < 9; i++) {
  nome = prompt(`Digite o nome da pessoa:`);
  idade = Number(prompt(`Digite a idade desta pessoa:`));
  nomesPessoas.push(nome);
  idadePessoas.push(idade);
}

for (let i = 0; i < 9; i++) {
    if(idadePessoas[i] < 18) {
        console.log(`Nome: ${nomesPessoas[i]}, Idade: ${idadePessoas[i]}`);
    }
}
