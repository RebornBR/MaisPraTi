const prompt = require('prompt-sync')();
let a = Number(prompt("Digite o valor da primeira reta: "))
let b = Number(prompt("Digite o valor da segunda reta: "))
let c = Number(prompt("Digite o valor da terceira reta: "))

if(a + b > c && a + c > b && b + c > a){
    console.log("é possivel formar um triangulo");
}else{
    console.log("Não é possivel formar um triangulo");
}