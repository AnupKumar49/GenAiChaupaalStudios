// DiscountBanner.js

import React from 'react';
import styles from './DiscountBanner.module.css'; // Import the CSS module

function DiscountBanner() {
  return (
    <div className={styles.discountBanner}>
      <div className={styles.leftContent}>
        <h2 className={styles.heading}>Super discount on more than 100 USD</h2>
        <p className={styles.subheading}>Have you ever finally just while dummy info</p>
      </div>
      <div className={styles.rightContent}>
        <button className={styles.shopNowButton}>Shop now</button>
      </div>
    </div>
  );
}

export default DiscountBanner;

