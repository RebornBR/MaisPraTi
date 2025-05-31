const prompt = require('prompt-sync')();
let numero = Number(prompt("De qual número é a tabuada: "));
for(let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} = ` + (numero * i))
}