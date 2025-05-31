function ordenarPreco(arrayProdutos){
    return arrayProdutos.sort((a, b) => a.preco - b.preco).map(produto => produto.nome);
}

const produtos = [
    { nome: "Celular", preco: 1500 },
    { nome: "Notebook", preco: 3500 },
    { nome: "Fone de Ouvido", preco: 200 },
    { nome: "Monitor", preco: 1200 },
    { nome: "Mouse", preco: 150 },
    { nome: "Teclado", preco: 250 }
];

console.log(ordenarPreco(produtos));