import styled, { css } from 'styled-components';

const variantes = {
  solid: css`
    background-color: ${({ theme }) => theme.primaria};
    color: white;
    border: none;
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.primaria};
    border: 2px solid ${({ theme }) => theme.primaria};
  `,
  ghost: css`
    background-color: transparent;
    color: ${({ theme }) => theme.primaria};
    border: none;
  `,
};

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaria};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variante }) => variantes[variante || 'solid']}
`;

const Button = ({ children, variante = 'solid', ...props }) => {
  return (
    <StyledButton variante={variante} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;