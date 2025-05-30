function debounce(fn, delay) {
    let tempoLimite; 
    return function (...args) {
        console.log("Sua função será executada após " + delay / 1000 + " segundos, se você não chamá-la novamente.");
        clearTimeout(tempoLimite); 
        tempoLimite = setTimeout(() => {
            console.log("Executando a função agora")
            console.log(fn(...args)); 
        }, delay);
    };
}

function soma(a, b) {
    return a + b;
}
const debounceSoma = debounce(soma, 3000);
debounceSoma(5, 5);
