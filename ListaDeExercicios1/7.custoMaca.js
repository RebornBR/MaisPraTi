function quantoCustaEssasMacas(qtdMacas){
if(!isNaN(qtdMacas)){ // se false (!isNaN) isNaN retorna true se n for um numero por isso utilizamos a negaçao !(diferente)
    let valorUnidade = 0.30;
    if(qtdMacas >= 12){
        valorUnidade = 0.25;
    }
    let total = valorUnidade * qtdMacas;
    console.log(`${qtdMacas} x ${valorUnidade} 
        TOTAL: R$${total}`);
}else{
    console.log("Digite um valor válido")
}
}
const prompt = require('prompt-sync')();
let qtdMacas = Number(prompt("Quantas maças você vai querer: ")); 
quantoCustaEssasMacas(qtdMacas);