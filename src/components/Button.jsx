import React from 'react';

export default function Button({ children, variant = 'default', className = '', ...props }) {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition duration-200';
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
