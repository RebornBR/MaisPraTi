import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ tema, alternarTema, carrinho }) => {
  return (
    <nav className={styles.navbar} aria-label="Barra de navegação">
      <strong>Mini loja React CSS-MODULE</strong>
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