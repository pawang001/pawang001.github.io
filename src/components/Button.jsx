import React from 'react';

const Button = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3 rounded-lg font-semibold text-white
        bg-gradient-to-r from-purple-600 to-indigo-600
        hover:from-purple-700 hover:to-indigo-700
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        shadow-lg hover:shadow-purple-500/50
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
