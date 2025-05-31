function menu(opcao){
    switch(opcao){
        case 1:
            console.log("Bom Dia!!!!!!!!!!!!");
            break;
        case 2:
            console.log("Boa Tarde!!!!!!!!!!!!");
            break; 
        case 3:
            console.log("Boa Noite!!!!!!!!!!!!");
            break;
        default:
            console.log("Opção inválida"); 
            break;     
    }
}

const prompt = require('prompt-sync')();
let opcao = Number(prompt("1 para Bom dia" + "\n" +  "2 para Boa tarde" + "\n" + "3 para Boa noite:"));
menu(opcao);
