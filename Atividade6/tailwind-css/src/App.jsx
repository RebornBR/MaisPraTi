import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar.jsx';
import ProductCard from './components/ProductCard.jsx';
import Skeleton from './components/Skeleton.jsx';
import { products } from './data/products.js';
import '/src/index.css';

const App = () => {
  const [tema, setTema] = useState(localStorage.getItem('tema') || 'light');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    document.documentElement.className = tema;
    localStorage.setItem('tema', tema);
  }, [tema]);

  useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar tema={tema} alternarTema={() => setTema(tema === 'light' ? 'dark' : 'light')} carrinho={2} />
      <main className="grid gap-4 px-4 pt-24 pb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {carregando
          ? products.map((_, i) => <Skeleton key={i} />)
          : products.map((produto) => <ProductCard key={produto.id} produto={produto} />)}
      </main>
    </>
  );
};

export default App;