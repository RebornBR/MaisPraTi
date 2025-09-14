import React from 'react';

const Button = ({ children, variante = 'solid', ...props }) => {
  return (
    <button className={`botao ${variante}`} {...props}>
      {children}
    </button>
  );
};

export default Button;