let numerosGerados = [];

for (let i = 0; i < 20; i++) {
let numeroAleatorio = Math.ceil(Math.random()* 99);
numerosGerados.push(numeroAleatorio);
}
console.log(numerosGerados.sort((a, b) => a - b));


