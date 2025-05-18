const prompt = require('prompt-sync')();
let distanciaKm = Number(prompt("Digite em KM a distancia que sera percorrida: "));
let valorKm = 0.50;

if(distanciaKm > 200){
    valorKm = 0.45;
}
console.log(`O valor é de R$${valorKm*distanciaKm}`)