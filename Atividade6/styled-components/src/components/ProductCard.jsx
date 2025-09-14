import styled from 'styled-components';
import Button from './Button';

const Card = styled.div`
  background-color: ${({ theme }) => theme.fundo};
  border: 1px solid ${({ theme }) => theme.borda};
  border-radius: 8px;
  box-shadow: 0 2px 4px ${({ theme }) => theme.sombra};
  padding: 16px;
  transition: all 200ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.sombra};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaria};
  }
`;

const Imagem = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 8px;
  background-color: #ccc;
`;

const Titulo = styled.div`
  font-size: 1rem;
  line-height: 1.2;
  margin: 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductCard = ({ produto }) => (
  <Card tabIndex={0} aria-label={`Produto: ${produto.title}`}>
    <Imagem src={produto.image} alt={produto.title} loading="lazy" />
    <Titulo>{produto.title}</Titulo>
    <div>Preço: {produto.price}</div>
    <div>★ {produto.rating}</div>
    <div>{produto.tag}</div>
    <Button variante="solid">Adicionar</Button>
  </Card>
);

export default ProductCard;