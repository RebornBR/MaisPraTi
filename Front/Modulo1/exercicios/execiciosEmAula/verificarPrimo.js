/* Para verificar se um número é primo, basta verificar se ele só é divisível por 1 e por ele mesmo. Se o número for divisível por algum outro número, ele não é primo. */

const prompt = require('prompt-sync')(); 
function ehPrimo(numero){ //big O (n)
    numero = parseInt(numero);
    if(numero == 2){
        return true;
    }
    if(numero <= 1 || numero%2 == 0){
        return false;
    }

for(let i = numero-1; i > 1 ; i--){
    if(numero%i === 0){
        return false;
    }
}
 return true;
}

let numeroMaximo = 200;
let numeroAverificar = Number(prompt("Digite um numero entre 1 e " +numeroMaximo+ " e descubra se ele é um numero primo: "));

if(numeroAverificar <= numeroMaximo && numeroAverificar > 1){
    if(ehPrimo(numeroAverificar) === true){
        console.log(numeroAverificar + " é um número primo")
    }else{
        console.log(numeroAverificar + " não é um número primo")
    }
}else {
    console.log("Numero inválido");
}