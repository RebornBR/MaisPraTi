const prompt = require("prompt-sync")();
let numeroAleatorio = Math.ceil(Math.random() * 100);
let numeroUsuario;
let tentativas = 0;

do{
    tentativas++
    numeroUsuario = Number(prompt("Digite um número: "));
    if(numeroUsuario < numeroAleatorio){
        console.log("mais alto");
    }else if(numeroUsuario > numeroAleatorio){
        console.log("mais baixo");
    }else if(numeroAleatorio == numeroUsuario){
        console.log(`Você Acertou em ${tentativas} tentativas, número aleatório ${numeroAleatorio}`);
    }
}while(numeroUsuario !== numeroAleatorio);

