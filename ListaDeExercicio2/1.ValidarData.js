function ehDataValida(dia, mes, ano){
    let meses31dias = [1,3,5,7,8,10,12];
    let meses30dias = [4,6,9,11];
    let naoEhValida = false;
    let ehValida = true;

    function ehAnoBissexto(ano) {
    return (ano % 4 === 0) && ((ano % 100 !== 0) || (ano % 400 === 0));
    // se alguma das condiçoes for true, o ano é bissexto.
    }

    if (meses30dias.includes(mes)) {
        return dia >= 1 && dia <= 30 ? ehValida : naoEhValida;
    } else if (meses31dias.includes(mes)) {
        return dia >= 1 && dia <= 31 ? ehValida : naoEhValida;
    } else if (mes === 2) {
        let fevereiroDe28Ou29 = ehAnoBissexto(ano) ? 29 : 28; // se true 29, se false 28
        return dia >= 1 && dia <= fevereiroDe28Ou29 ? ehValida : naoEhValida;
    } else {
        return naoEhValida; // Caso o mês seja inválido
    }
}

const prompt = require('prompt-sync')();

let dia = Number(prompt("Digite o dia: "));
let mes = Number(prompt("Digite o mes: "));
let ano = Number(prompt("Digite o ano: "));

console.log(`${dia}/${mes}/${ano} é válido ? `)
console.log(ehDataValida(dia, mes, ano));
