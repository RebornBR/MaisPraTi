let prompt = require("prompt-sync")();
let salarioHomens = 0;
let salarioMulheres = 0;
let continuar = "sim";
let salario = 0;
let genero;
do {
    genero = prompt("Genero do funcionario: Homem ou Mulher ");
    genero = genero.toLowerCase();
    if(genero === "homem" || genero === "mulher"){
        salario = Number(prompt("Qual o salario dessa pessoa ? "));
        if(genero === "homem"){
            salarioHomens += salario;
        }else{
            salarioMulheres += salario;
        }
        continuar = prompt("Digite 'nao' para parar ");
    }else{
        console.log("O genero deve ser: Homem ou Mulher");
    }
} while (continuar != "nao");

console.log(`Salario total dos homens: R$${salarioHomens}, Salario total das mulheres R$${salarioMulheres}`);