const prompt = require("prompt-sync")();

function calcularPontosVidaSaudavel(horasPraticasMensal) {
    let pontos = 0;
    if (horasPraticasMensal > 0 && horasPraticasMensal <= 10) {
        pontos = horasPraticasMensal * 2;
    } else if (horasPraticasMensal > 10 && horasPraticasMensal <= 20) {
        pontos = (10 * 2) + ((horasPraticasMensal - 10) * 5);
    } else if (horasPraticasMensal > 20) {
        pontos = (10 * 2) + (10 * 5) + ((horasPraticasMensal - 20) * 10);
    }
    let dinheiro = pontos * 0.05;
    return `Você praticou ${horasPraticasMensal} horas de atividade física neste mês e recebeu R$${dinheiro.toFixed(2)} por isso.`;
}

let hora = Number(prompt("Quantas horas você passou praticando atividade física este mês? "));
console.log(calcularPontosVidaSaudavel(hora));