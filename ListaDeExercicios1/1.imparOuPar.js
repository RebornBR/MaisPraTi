function ehPar(numero){
    if(numero%2==0){
        console.log("O número " + numero + " é par");
    }else{
        console.log("O número " + numero + " é impar");
    }
}


const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um número: "));
ehPar(numero);