// components/Toast.jsx
import React from 'react';
import './Toast.css';

const Toast = ({ message }) => {
  return (
    <div className="toast-popup">
      {message}
    </div>
  );
};

export default Toast;
