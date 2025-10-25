SELECT 
    c.data,
    SUM(ic.quantidade * ca.preco_unitario) AS faturamento_total
FROM Comanda c
JOIN ItemComanda ic ON c.codigo_comanda = ic.codigo_comanda
JOIN Cardapio ca ON ic.codigo_cardapio = ca.codigo_cardapio
GROUP BY c.data
ORDER BY c.data;