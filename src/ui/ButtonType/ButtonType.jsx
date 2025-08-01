import React from 'react';
import styles from './ButtonType.module.css'
const ButtonType = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
};

export default ButtonType;
