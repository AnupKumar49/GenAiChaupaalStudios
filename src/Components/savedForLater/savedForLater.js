// SavedForLater.js

import React from 'react';
import cartIcon from '../../Assets/cart.svg';

import chaupaalIcon from '../../Assets/chaupaal.jpg';
import styles from './savedForLater.module.css'; // Import the CSS modules

function SavedForLater() {
  // Sample data for products in the carousel
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: chaupaalIcon },
    { id: 2, name: 'Product 2', price: '$24.99', image: chaupaalIcon },
    { id: 4, name: 'Product 3', price: '$29.99', image: chaupaalIcon },
    { id: 5, name: 'Product 3', price: '$29.99', image: chaupaalIcon },
    { id: 6, name: 'Product 3', price: '$29.99', image: chaupaalIcon },
    { id: 7, name: 'Product 3', price: '$29.99', image: chaupaalIcon },
    { id: 8, name: 'Product 3', price: '$29.99', image: chaupaalIcon },
    { id: 9, name: 'Product 3', price: '$29.99', image: chaupaalIcon },
    // Add more products as needed
  ];


  return (
    <div className={styles.savedForLater}>
      <h2 className={styles.heading}>Saved for Later</h2>
      <div className={styles.carousel}>
        {products.map((product) => (
          <div className={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} className={styles.productImage} />
            <div className={styles.productInfo}>
              <div className={styles.productPrice}>{product.price}</div>
              <div className={styles.productName}>{product.name}</div>
              <div className={styles.productSpec}>Specifications</div>
              <button className={styles.addToCartButton}>
                <img src={cartIcon} alt="Cart" className={styles.cartIcon} />
                Move to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SavedForLater;
