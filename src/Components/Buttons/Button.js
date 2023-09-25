// Buttons.js

import React from 'react';
import styles from './Button.module.css'; // Import the CSS module
import { Link } from 'react-router-dom'; // Import Link

function Buttons() {
  return (
    <div className={styles.container}>
      <Link to="/" style={{'text-decoration' :'none'}}> 
      <button  className={styles.backButton}>
      
        <i className="fas fa-arrow-left"></i> Back to Shop
        
      </button>
      </Link>
      <button className={styles.removeAllButton}>Remove all</button>
    </div>
  );
}

export default Buttons;
