const prompt = require('prompt-sync')();
function fibonacci(numeroDeTermos){
let penultimo = 1; 
let antepenultimo = 1; 
let atual; 
let sequenciaFibonacci = Array();
sequenciaFibonacci.push(antepenultimo);
sequenciaFibonacci.push(penultimo); 
numeroDeTermos = numeroDeTermos - 2; 
for(let i = 1; i <= numeroDeTermos ; i++){
    atual = penultimo + antepenultimo;
    sequenciaFibonacci.push(atual);
    antepenultimo = penultimo;
    penultimo = atual;
}
console.log(sequenciaFibonacci);
}

console.log("Os 10 primeiros numeros de fibonacci:")
console.log(fibonacci(10));

console.log("Os 15 primeiros numeros de fibonacci:")
console.log(fibonacci(15));

