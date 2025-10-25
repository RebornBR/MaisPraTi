INSERT INTO Cardapio (nome_cafe, descricao, preco_unitario)
VALUES 
('Café Expresso', 'Café forte', 5.50),
('Cappuccino', 'Café polvilhado com chocolate.', 7.00),
('Latte', 'Café suave e cremoso.', 6.50);

INSERT INTO Comanda (data, numero_mesa, nome_cliente)
VALUES 
('2025-10-20', 12, 'Rodrigo');

INSERT INTO ItemComanda (codigo_comanda, codigo_cardapio, quantidade)
VALUES 
(1, 1, 2),
(1, 2, 1);  