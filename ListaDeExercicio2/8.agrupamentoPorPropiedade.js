const vendas = [
    { cliente: "Ana Silva", total: 500 },
    { cliente: "Carlos Oliveira", total: 1200 },
    { cliente: "Fernanda Souza", total: 750 },
    { cliente: "Ana Silva", total: 300 },
    { cliente: "Carlos Oliveira", total: 700 },
];

const totalPorCliente = vendas.reduce((acumulador, venda) => {
    acumulador[venda.cliente] = (acumulador[venda.cliente] || 0) + venda.total;
    return acumulador;
}, {});

console.log(totalPorCliente);
