function esseTrianguloEh(a, b, c) {
    if(a + b > c && a + c > b && b + c > a){
        if (a == b && b == c) {
            console.log("Triângulo equilátero"); // Todos os lados são iguais
        } else if (a == b || b == c || c == a) {
            console.log("Triângulo isósceles"); // Apenas dois lados iguais
        } else {
            console.log("Triângulo escaleno"); // Todos os lados diferentes
        }
    }else{
        console.log("Triangulo inválido");
    }
}
const prompt = require('prompt-sync')();
let ladoA = Number(prompt("Digite o valor do lado A do triangulo: "));
let ladoB = Number(prompt("Digite o valor do lado B do triangulo: "));
let ladoC = Number(prompt("Digite o valor do lado C do triangulo: "));
esseTrianguloEh(ladoA, ladoB, ladoC);