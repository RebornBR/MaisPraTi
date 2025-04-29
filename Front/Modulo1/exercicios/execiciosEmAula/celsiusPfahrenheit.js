const prompt = require('prompt-sync')(); 
let oqDesejaCalcular = Number(prompt("Se deseja converter celsius para fahrenheit, digite 1. Se ao contrario, digite 2: "));

if(oqDesejaCalcular == 1){
let celsiusParaFahrenheit = Number(prompt("Digite o valor em celsius que sera convertido para fahrenheit: "));
celsiusParaFahrenheit = (celsiusParaFahrenheit * 1.8) + 32;
console.log("Resultado: " + celsiusParaFahrenheit);
}else if(oqDesejaCalcular == 2){
let FahrenheitParaCelsius = Number(prompt("Digite o valor em fahrenheit que sera convertido para celsius: "));
FahrenheitParaCelsius = (FahrenheitParaCelsius - 32) / 1.8;
console.log("Resultado: " + FahrenheitParaCelsius);
}else{
    console.log("Opçao invalida")
}