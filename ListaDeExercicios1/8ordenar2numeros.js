function ordene(numero1, numero2){
    if(isNaN(numero1) || isNaN(numero2)){
        console.log("Digite valores válidos");
        return
    }
    if(numero1 === numero2){
        console.log("Dois números iguais" )
    }else{
        let maiorNumero;
        let menorNumero;
        if(numero1 > numero2){
            maiorNumero = numero1;
            menorNumero = numero2;
        }else{
            maiorNumero = numero2;
            menorNumero = numero1;
        }
        console.log(menorNumero + ", " + maiorNumero);
    }
}
const prompt = require('prompt-sync')();
let num1 = Number(prompt("Digite o primeiro numero: "));
let num2 = Number(prompt("Digite o segundo numero: "));
ordene(num1, num2); 