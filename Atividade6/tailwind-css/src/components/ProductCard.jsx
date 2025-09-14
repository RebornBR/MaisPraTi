import React from 'react';
import Button from './Button';

const ProductCard = ({ produto }) => {
  return (
<div
  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded shadow hover:shadow-lg transition duration-200 p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"
  tabIndex={0}
  aria-label={`Produto: ${produto.title}`}
>
  <img
    src={produto.image}
    alt={produto.title}
    className="w-full aspect-square object-cover rounded bg-gray-300"
    loading="lazy"
  />
  <div className="text-sm font-semibold mt-2 line-clamp-2">{produto.title}</div>
  <div className="text-sm">Preço: {produto.price}</div>
  <div className="text-sm">★ {produto.rating}</div>
  <div className="text-xs font-medium text-blue-600">{produto.tag}</div>
  <Button variante="solid">Adicionar</Button>
</div>
  );
};

export default ProductCard;