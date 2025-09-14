import React from 'react';
import Button from './Button';
import styles from './ProductCard.module.css';

const ProductCard = ({ produto }) => {
  return (
    <div className={styles.card} tabIndex={0} aria-label={`Produto: ${produto.title}`}>
      <img
        src={produto.image}
        alt={produto.title}
        className={styles.imagemProduto}
        loading="lazy"
      />
      <div className={styles.titulo}>{produto.title}</div>
      <div>Preço: {produto.price}</div>
      <div>★ {produto.rating}</div>
      <div>{produto.tag}</div>
      <Button variante="solid">Adicionar</Button>
    </div>
  );
};

export default ProductCard;