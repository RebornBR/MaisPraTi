function fatorial(n){
    if(n < 0){
        throw new Error("Não existe fatorial para número negativos");
    }
    if(n === 1){
        return 1; // caso base
    }
    let resultado = n * (fatorial(n- 1));
    console.log(`Fatorial de ${n} = ${n} * fatorial(${n - 1}) = ${resultado}`);
    return resultado;
}

console.log(fatorial(5));