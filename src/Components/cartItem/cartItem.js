// CartItem.js

import React from 'react';
import styles from './cartItem.module.css'; // Import the CSS modules
import shirtIcon from '../../Assets/shirt.png'

function CartItem() {
  return (
    <div className={styles.cartItem}>
      <div className={styles.productImage}>
        <img src={shirtIcon} alt="Product" />
      </div>
      <div className={styles.productDetails}>
        <div className={styles.productName}>Product Name</div>
        <div className={styles.productInfo}>
          <span className={styles.infoItem}>Size: M</span>
          <span className={styles.infoItem}>Color: Blue</span>
          <span className={styles.infoItem}>Material: Cotton</span>
        </div>
        <div className={styles.sellerName}>Seller: Seller Name</div>
        <div className={styles.productActions}>
          <button className={styles.actionButton}>Remove</button>
          <button className={styles.actionButtonHighlighted}>Save For Later</button>
        </div>
      </div>
      <div className={styles.productPrice}>$99.99</div>
    </div>
  );
}

export default CartItem;
