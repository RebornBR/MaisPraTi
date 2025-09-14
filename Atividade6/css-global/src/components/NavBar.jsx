import React from 'react';

const Navbar = ({ tema, alternarTema, carrinho }) => {
  return (
    <nav className="navbar" aria-label="Barra de navegação">
      <strong>Mini loja React CSS-GLOBAL</strong>
      <div>
        <button onClick={alternarTema} aria-label="Alternar tema">
          {tema === 'dark' ? '🌙' : '☀️'}
        </button>
        <span aria-label="Itens no carrinho">🛒 {carrinho}</span>
      </div>
    </nav>
  );
};

export default Navbar;