const prompt = require('prompt-sync')(); 

let senha;
let senhaCorreta;

do{
    senha = Number(prompt("Digite a senha: "));
    if (senha === 2807){
    console.log("Acesso permitido");
    senhaCorreta = true;
    }else{
    console.log("Senha inválida")
    senhaCorreta = false
    }
}while(senhaCorreta === false);