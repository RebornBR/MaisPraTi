let prompt = require('prompt-sync')();
let funcionario = {
    nome: '',
    cargo: '',
    salario: 0
};
funcionario.nome = prompt("Digite o nome do funcionário: ");
funcionario.cargo = prompt("Digite o cargo do funcionário: ");
funcionario.salario = parseFloat(prompt("Digite o salário do funcionário: "));

console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario.toFixed(2)}`);