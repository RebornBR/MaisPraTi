const prompt = require('prompt-sync')(); 
let turmaC = 60;
let turmaD = 20;
let totalEstudantesTurmaCeD = turmaC + turmaD;

let reprovadosTurmaC = Number(prompt("Digite a quantidade de alunos reprovados na turma C: "));
let reprovadosTurmaD = Number(prompt("Digite a quantidade de alunos reprovados na turma D: "));

console.log("Total de estudantes turma C e D: " + totalEstudantesTurmaCeD);
console.log("Porcentagem de reprovados da turma C: " + ((reprovadosTurmaC/turmaC) * 100) + "%");
console.log("Porcentagem de reprovados da turma D: " + ((reprovadosTurmaD/turmaD) * 100) + "%");
console.log("Porcentagem de alunos reprovados: " + ((reprovadosTurmaC + reprovadosTurmaD)/totalEstudantesTurmaCeD)* 100 + "%");