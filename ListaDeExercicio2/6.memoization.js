function memoize(fn) {
    const cache = new Map(); // criando um map, chaves e valores
    return function(...args) { /// para cada argumento da funçao(cada paramentro)
        const key = JSON.stringify(args);// tranformamos esses parametros em uma chave JSON
        if (cache.has(key)) { // verificamos se nosso cache já tem essa chave
            return cache.get(key); // caso ja a tenha, a retornamos
        }
        const result = fn.apply(this, args); // chama a funçao com os argumentos que estao no args
        cache.set(key, result); // adicionamos ao cache a chave o resultado
        return result;
    };
}

const fastFib = memoize(function(n) {
    if (n <= 0) {
        return "Número inválido";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fastFib(n - 1) + fastFib(n - 2);
    }
});

console.log(fastFib(45));
