SELECT 
    c.codigo_comanda,
    c.data,
    c.numero_mesa,
    c.nome_cliente,
    ca.nome_cafe,
    ca.descricao,
    ic.quantidade,
    ca.preco_unitario,
    (ic.quantidade * ca.preco_unitario) AS preco_total_cafe
FROM Comanda c
JOIN ItemComanda ic ON c.codigo_comanda = ic.codigo_comanda
JOIN Cardapio ca ON ic.codigo_cardapio = ca.codigo_cardapio
ORDER BY c.data, c.codigo_comanda, ca.nome_cafe;