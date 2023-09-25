// CouponInput.js

import React from 'react';
import styles from './coupon.module.css'; // Import the CSS module

function CouponInput() {
  return (
    <div className={styles.couponInput}>
      <p className={styles.couponText}>Have a coupon?</p>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add Coupon"
          className={styles.input}
          // Add any necessary props or event handlers here
        />
        <button className={styles.applyButton}>Apply</button>
      </div>
    </div>
  );
}

export default CouponInput;
