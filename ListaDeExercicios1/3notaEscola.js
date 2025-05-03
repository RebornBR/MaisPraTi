function statusAluno(nota){
    if (nota < 0 || nota > 10){
        console.log("A note deve ser de 0 a 10");
    }else if (nota <6){
        console.log("Reprovado");
    }else if(nota >=6){
        console.log("Aprovado");
    }else{
        console.log("Digite uma nota válida");
    }
}


const prompt = require('prompt-sync')();
let nota = Number(prompt("Digite a nota do aluno: "));
statusAluno(nota);
