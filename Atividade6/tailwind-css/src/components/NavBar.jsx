import React from 'react';

const Navbar = ({ tema, alternarTema, carrinho }) => {
  return (
   <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-4 flex justify-between items-center z-10" aria-label="Barra de navegação">
  <strong className="text-gray-900 dark:text-white">Mini loja React Tailwind</strong>
  <div className="flex items-center gap-4">
    <button onClick={alternarTema} aria-label="Alternar tema">
      {tema === 'dark' ? '🌙' : '☀️'}
    </button>
    <span aria-label="Itens no carrinho">🛒 {carrinho}</span>
  </div>
</nav>
  );
};

export default Navbar;