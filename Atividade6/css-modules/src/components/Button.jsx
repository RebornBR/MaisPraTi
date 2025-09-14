import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variante = 'solid', ...props }) => {
  return (
    <button className={`${styles.botao} ${styles[variante]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;