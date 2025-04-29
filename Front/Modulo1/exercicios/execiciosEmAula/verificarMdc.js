// Verificar o mdc de dois numeros
function mdc(numero1, numero2){
    let maxRepeticao;
    let mdc;
    numero1= parseInt(numero1);
    numero2= parseInt(numero2);
    if(numero1 < numero2){
        maxRepeticao = numero1;
    }else{
        maxRepeticao = numero2;
    }

    for(let i = 1; i <= maxRepeticao; i++){
        if(numero1%i == 0 && numero2%i == 0){
            mdc = i;
        }
    }
    return "O máximo divisor comum de " +numero1 +" e " + numero2 + " é: "   + mdc;
}

const prompt = require('prompt-sync')(); 
let primeiroNumero = Number(prompt("Digite o primeiro numero: "));
let segundoNumero = Number(prompt("Digite o segundo numero: "));
console.log(mdc(primeiroNumero, segundoNumero));
4