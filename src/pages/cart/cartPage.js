import React from 'react';
import CartItem from '../../Components/cartItem/cartItem';
import CartSummary from '../../Components/cartSummary/cartSummary';
import FeatureBlocks from '../../Components/FeatureBlock/featureBlock';
import SavedForLater from '../../Components/savedForLater/savedForLater';
import CouponInput from '../../Components/coupon/coupon';
import Buttons from '../../Components/Buttons/Button';
import DiscountBanner from '../../Components/DiscountBanner/DiscountBanner';
import Navbar from '../../Components/Navbar/navbar';

import styles from './cartPage.module.css'; // Import the CSS modules


function Cart() {
  // Sample data for cart items
  const cartItems = [
    { id: 1, name: 'Product 1', price: '$19.99', image: '/product1.jpg' },
    { id: 2, name: 'Product 2', price: '$24.99', image: '/product2.jpg' },
    // Add more cart items as needed
  ];

  return (
    <>
    <Navbar quantity={2}/>
    <div className={styles.cart}>
      <h1 className={styles.cartHeading}>
        Your Cart ({cartItems.length})
      </h1>
      <div className={styles.cartContent}>
        {/* Left 10:2 Block */}
        <div className={styles.cartItemsBlock}>
          {cartItems.map((item) => (
            <CartItem/>
          ))}
          <Buttons/>
        </div>
        {/* Right 2:10 Block */}
        <div className={styles.summaryBlock}>
          <CouponInput />
          <CartSummary />
        </div>
      </div>
      <FeatureBlocks />
      <SavedForLater />
      <DiscountBanner />
    </div>
    </>

  );
 
}

export default Cart;

