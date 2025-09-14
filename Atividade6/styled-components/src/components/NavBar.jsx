import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.fundo};
  border-bottom: 1px solid ${({ theme }) => theme.borda};
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const Navbar = ({ tema, alternarTema, carrinho }) => (
  <Nav aria-label="Barra de navegação">
    <strong>Mini loja React styled-components</strong>
    <div>
      <button onClick={alternarTema} aria-label="Alternar tema">
        {tema === 'dark' ? '🌙' : '☀️'}
      </button>
      <span aria-label="Itens no carrinho">🛒 {carrinho}</span>
    </div>
  </Nav>
);

export default Navbar;