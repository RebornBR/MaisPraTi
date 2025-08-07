let prompt = require('prompt-sync')();

function processar(quantidade) {
    let funcionarios = [];
    for (let i = 0; i < quantidade; i++) {
        console.log('-----------------------------');
        console.log(`Cadastrando ${i + 1}º Funcionário `);
        let funcionario = {
        nome: '',
        matricula: '',
        salarioBruto: 0,
        descontoInss: 0,
        salarioLiquido: 0,
        };
        funcionario.nome = prompt('Digite o nome do funcionário: ');    
        funcionario.matricula = prompt('Digite a matrícula do funcionário: '); 
        funcionario.salarioBruto = parseFloat(prompt('Digite o salário bruto do funcionário: '));
        funcionario.descontoInss = funcionario.salarioBruto * 0.12;  
        funcionario.salarioLiquido = funcionario.salarioBruto - funcionario.descontoInss;
        funcionarios.push(funcionario);
    }
    return funcionarios.forEach(funcionario => {
        console.log('-----------------------------');
        console.log(`Nome: ${funcionario.nome}`);
        console.log(`Matrícula: ${funcionario.matricula}`);
        console.log(`Salário Bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
        console.log(`Desconto INSS: R$ ${funcionario.descontoInss.toFixed(2)}`);
        console.log(`Salário Líquido: R$ ${funcionario.salarioLiquido.toFixed(2)}`);
        console.log('-----------------------------');
    })
}

processar(5);