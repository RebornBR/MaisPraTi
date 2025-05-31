const prompt = require('prompt-sync')();
let penultimo = 1; // F(n-1)
let antepenultimo = 0; // F(n-2)
let atual; // F(n) = F(n-1) + F(n-2)
let sequenciaFibonacci = Array();
sequenciaFibonacci.push(antepenultimo);
sequenciaFibonacci.push(penultimo);

let numeroDeTermos = Number(prompt("Digite a quantidade de termos da sequencia de fibonacci que vc deseja saber: "));
numeroDeTermos = numeroDeTermos - 2; // pq ja adicionamos os 2 primeiros termos ao array
for(let i = 1; i <= numeroDeTermos ; i++){
    atual = penultimo + antepenultimo;
    sequenciaFibonacci.push(atual);
    antepenultimo = penultimo;
    penultimo = atual;
}
console.log(sequenciaFibonacci);


