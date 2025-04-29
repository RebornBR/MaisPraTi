/* Escreva um algoritmo para ler o número de eleitores de um município, o número de votos
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao
total de eleitores */
const prompt = require('prompt-sync')(); 
let totalEleitorado = Number(prompt("Digite a quantidade total de eleitores: "));
let totalVotosValidos = Number(prompt("Digite o total de votos validos: "));
let totalVtNulos = Number(prompt("Digite o total de votos nulos: "));
let totalVtBrancos = Number(prompt("Digite o total de votos brancos: "));

if(totalVotosValidos + totalVtNulos + totalVtBrancos === totalEleitorado){
console.log("Total votos: " + totalEleitorado);
console.log("Total válidos: " + ((totalVotosValidos / totalEleitorado) * 100) + "%");
console.log("Total votos nulos: " + ((totalVtNulos / totalEleitorado) * 100) + "%");
console.log("Total votos brancos: " + ((totalVtBrancos / totalEleitorado) * 100) + "%");
}else{
    console.log("Soma de votos maior que a quantidade total de eleitores");
}
