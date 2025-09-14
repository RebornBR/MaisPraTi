import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar.jsx';
import ProductCard from './components/ProductCard.jsx';
import Skeleton from './components/Skeleton.jsx';
import { products } from './data/products.js';
import styles from './App.module.css'; 
import './styles/global.css';

const App = () => {
  const [tema, setTema] = useState(localStorage.getItem('tema') || 'light');
  const [carregando, setCarregando] = useState(true);

useEffect(() => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(tema);
  localStorage.setItem('tema', tema);
}, [tema]);

  useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar
        tema={tema}
        alternarTema={() => setTema(tema === 'light' ? 'dark' : 'light')}
        carrinho={2}
      />
      <main className={styles.gridProdutos}>
        {carregando
          ? products.map((_, i) => <Skeleton key={i} />)
          : products.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
      </main>
    </>
  );
};

export default App;