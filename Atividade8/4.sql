SELECT 
    c.codigo_comanda,
    c.data,
    c.numero_mesa,
    c.nome_cliente,
    SUM(ic.quantidade * ca.preco_unitario) AS valor_total_comanda
FROM Comanda c
JOIN ItemComanda ic ON c.codigo_comanda = ic.codigo_comanda
JOIN Cardapio ca ON ic.codigo_cardapio = ca.codigo_cardapio
WHERE c.codigo_comanda IN (
    SELECT codigo_comanda
    FROM ItemComanda
    GROUP BY codigo_comanda
    HAVING COUNT(DISTINCT codigo_cardapio) > 1
)
GROUP BY c.codigo_comanda, c.data, c.numero_mesa, c.nome_cliente
ORDER BY c.data;