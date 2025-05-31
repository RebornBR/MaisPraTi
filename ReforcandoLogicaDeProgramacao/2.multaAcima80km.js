const prompt = require('prompt-sync')();
let velocidadeCarro = Number(prompt("Qual a velocidade do carro? "));
if(velocidadeCarro === 80 || velocidadeCarro < 80){
    console.log("Velocidade permitida")
}else{
    velocidadeCarro = velocidadeCarro - 80
    let multa = velocidadeCarro * 5;
    console.log(`Velocidade acima da permitida, multa de R$${multa} aplicada`)
}