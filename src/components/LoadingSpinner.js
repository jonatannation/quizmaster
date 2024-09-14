import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner({ message }) {
  return (
    <div className="loading-spinner-container">
      <img src="/kvasnes.png" alt="Loading" className="loading-spinner" />
      <p className="loading-message">{message}</p>
    </div>
  );
}

export default LoadingSpinner;
