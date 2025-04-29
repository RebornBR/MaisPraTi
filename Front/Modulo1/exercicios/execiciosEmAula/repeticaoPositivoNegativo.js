const prompt = require('prompt-sync')(); 
let numero;
do{
    numero = Number(prompt("Digite um número: "));
    if(numero > 0){
    console.log("Positivo")
    }else if(numero < 0){
    console.log("Negativo")
    }else{
        break;
    }
}while(numero != 0)
