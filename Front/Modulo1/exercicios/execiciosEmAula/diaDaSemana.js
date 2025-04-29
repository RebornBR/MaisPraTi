//Faça um programa que leia o dia da semana (Domingo, Segunda, Terça, Quarta, Quinta, Sexta e Sabado). 
// Esse dia deve ser um texto. Se for Sábado ou Domingo imprimir “Final de Semana”, senão imprimir “Dia Útil”.
const prompt = require('prompt-sync')(); 

let dia = prompt("Digite que dia é hoje: ")
dia = dia.toLowerCase();
if(dia == "segunda" || dia == "terça" || dia == "quarta" || dia == "quinta" || dia == "sexta" ){
    console.log("Dia útil")
}else if (dia == "sabado" || dia == "domingo"){
    console.log("Fim de semana")
}else{
    console.log("Vc criou um novo dia")
}
