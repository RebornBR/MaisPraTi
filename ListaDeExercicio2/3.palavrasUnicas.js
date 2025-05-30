function separarPalavras(string){
    let palavras = string.split(" ");
    let ArrayPalavras = [];

    for(let i = 0; i < palavras.length; i++){
        if(!ArrayPalavras.includes(palavras[i])){
            ArrayPalavras.push(palavras[i]);
        }   
    }    
    return ArrayPalavras;

}

let brasil = "Brasil vai ser hexacampeão em 2026";
console.log(separarPalavras(brasil));