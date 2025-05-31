function paresArrayParaObjeto(arr){
    return Object.fromEntries(arr);
}

function paresObjetoParaArray(obj){
    return Object.entries(obj);
}

// dois metodos funcionam apenas com chave valor

const arrayPares = [
    ["nome", "Harry"],
    ["idade", 30],
    ["cidade", "Hogsmeade"],
    ["profissao", "Bruxo"],
    ["hobby", "Quadribol"]
];
const objetoPares = {
    nome: "Rodrigo",
    idade: 30,
    cidade: "Olinda",
    profissão: "Desenvolvedor",
    hobby: "Tocar violão"
}

console.log(paresArrayParaObjeto(arrayPares));
console.log(paresObjetoParaArray(objetoPares));
