import React from 'react';

const estilos = {
  solid: 'bg-blue-600 text-white hover:bg-blue-700',
  outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800',
  ghost: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800',
};

const Button = ({ children, variante = 'solid', ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded font-bold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed ${estilos[variante]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;