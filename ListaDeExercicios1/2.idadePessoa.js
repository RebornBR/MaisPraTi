function oqEssaPessoaEh(idade){
    if(idade <= 12){
        console.log("Essa pessoa é uma criança");
    }else if(idade > 12 && idade < 18){
        console.log("Essa pessoa é um adolescente");
    }else if(idade >= 18 && idade < 60){
        console.log("Essa pesssoa é um adulto");
    }else if (idade >= 60){
        console.log("Essa pessoa é um idoso");
    }else{
        console.log("Essa pessoa é um mistério");
    }
}

const prompt = require('prompt-sync')();
let idade = Number(prompt("Digite a idade da pessoa: "));
oqEssaPessoaEh(idade);