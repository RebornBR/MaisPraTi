CREATE TABLE Cardapio (
    codigo_cardapio SERIAL PRIMARY KEY,
    nome_cafe VARCHAR(100) NOT NULL UNIQUE,
    descricao TEXT NOT NULL,
    preco_unitario NUMERIC(10,2) NOT NULL
);

CREATE TABLE Comanda (
    codigo_comanda SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    numero_mesa INT NOT NULL,
    nome_cliente VARCHAR(100) NOT NULL
);

CREATE TABLE ItemComanda (
    codigo_comanda INT NOT NULL,
    codigo_cardapio INT NOT NULL,
    quantidade INT NOT NULL,
    PRIMARY KEY (codigo_comanda, codigo_cardapio),
    FOREIGN KEY (codigo_comanda) REFERENCES Comanda(codigo_comanda),
    FOREIGN KEY (codigo_cardapio) REFERENCES Cardapio(codigo_cardapio)
);
