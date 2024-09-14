import React from 'react';
import './Button.css'; // Vi vil lage denne filen for å holde knappestilene

const Button = ({ children, onClick, className = '', variant = 'primary', disabled = false }) => {
  return (
    <button
      className={`custom-button ${variant} ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button-text">{children}</span>
    </button>
  );
};

export default Button;