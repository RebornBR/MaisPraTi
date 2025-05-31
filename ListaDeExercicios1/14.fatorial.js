const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um número para saber seu fatorial: "));

if(numero === 0){
    numero = 1;
}else{
    for (let i = numero -1 ; i >= 1; i--){
        numero *= i; // 5*4 = 20 ;; 20*3 = 60 ;; 60*2 = 120
    }  
}

console.log(numero); 