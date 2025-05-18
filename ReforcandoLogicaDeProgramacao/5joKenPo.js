const prompt = require('prompt-sync')();

function jokenpo(escolha){
    escolha = escolha.toLowerCase();
    let opcoes = ["pedra", "papel", "tesoura"];
    if(opcoes.includes(escolha) === false){
        return console.log("escolha pedra, papel ou tesoura");
    }
    let escolhaDoPc = opcoes[Math.floor(Math.random() * 3)] // math.random gera um aleatorio entre 0 e 1, multiplicamos por 3 e o math.floor arredonda para baixo e utilizamos o resultado como indice
    if(escolha === escolhaDoPc){
        console.log("Empatou!")
    }else if (
        (escolha === "pedra" && escolhaDoPc === "tesoura") ||
        (escolha === "papel" && escolhaDoPc === "pedra") || 
        (escolha === "tesoura" && escolhaDoPc === "papel")) {
            console.log("Voce venceu!")
    }else{
        console.log("Computador venceu");
    }
    console.log(`Sua escolha "${escolha}", escolha do pc "${escolhaDoPc}" `);
}
let suaEscolha = prompt("Digite pedra, papel ou tesoura: ");
jokenpo(suaEscolha);