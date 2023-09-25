// CartSummary.js

import React from 'react';
import mastercard from '../../Assets/mastercard.jpg';
import paytm from '../../Assets/paytm.jpg';
import googlepay from '../../Assets/googlepay..jpg';
import amex from '../../Assets/amex.jpg';

import styles from './cartSummary.module.css'; // Import the CSS modules

function CartSummary() {
  return (
    <div className={styles.cartSummary}>
      <div className={styles.summaryItem}>
        <span>Subtotal:</span>
        <span>$99.99</span>
      </div>
      <div className={styles.summaryItem}>
        <span>Discount:</span>
        <span className={styles.redText}>- $10.00</span>
      </div>
      <div className={styles.summaryItem}>
        <span>Tax:</span>
        <span className={styles.greenText}>+ $7.50</span>
      </div>
      <div className={styles.summaryDivider}></div>
      <div className={styles.summaryTotal}>
        <span>Total:</span>
        <span className={styles.boldText}>$97.49</span>
      </div>
      <button className={styles.checkoutButton}>Checkout</button>
      <div className={styles.paymentMethods}>
        <img src={googlepay} alt="GooglePay" />
        <img src={mastercard} alt="MasterCard" />
        <img src={paytm} alt="Paytm" />
        <img src={amex} alt="American Express" />
      </div>
    </div>
  );
}

export default CartSummary;
