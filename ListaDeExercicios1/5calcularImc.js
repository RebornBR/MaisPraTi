function imc(peso, altura){
    let seuImc = peso / (altura * altura);
    console.log("Seu imc é de: " + seuImc);
    if(seuImc < 17){
        console.log("Muito abaixo do peso");
    }else if(seuImc <= 18.49){
        console.log("Abaixo do peso");
    }else if(seuImc <= 24.99){
        console.log("Peso normal");
    }else if(seuImc <= 29.99){
        console.log("Acima do peso");
    }else if(seuImc <= 34.99){
        console.log("Obesidade grau 1");
    }else if(seuImc <= 39.99){
        console.log("Obesidade grau 2")
    }else if(seuImc >= 40){
        console.log("Obesidade grau 3")
    }
}

const prompt = require('prompt-sync')();
let peso = Number(prompt("Digite seu peso: " ));
let altura = Number(prompt("Digite sua altura: "))
imc(peso, altura);