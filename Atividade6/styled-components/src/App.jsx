import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import styled from 'styled-components';
import Navbar from './components/NavBar.jsx';
import ProductCard from './components/ProductCard.jsx';
import Skeleton from './components/Skeleton.jsx';
import { products } from './data/products.js';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.fundo};
    color: ${({ theme }) => theme.texto};
    font-family: sans-serif;
    transition: all 200ms ease-in-out;
    margin: 0;
  }
`;

const Grid = styled.main`
  display: grid;
  gap: 16px;
  padding: 100px 16px 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const App = () => {
  const [tema, setTema] = useState(localStorage.getItem('tema') || 'light');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    localStorage.setItem('tema', tema);
  }, [tema]);

  useEffect(() => {
    const timer = setTimeout(() => setCarregando(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={tema === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <Navbar
        tema={tema}
        alternarTema={() => setTema(tema === 'light' ? 'dark' : 'light')}
        carrinho={2}
      />
      <Grid>
        {carregando
          ? products.map((_, i) => <Skeleton key={i} />)
          : products.map((produto) => (
              <ProductCard key={produto.id} produto={produto} />
            ))}
      </Grid>
    </ThemeProvider>
  );
};

export default App;