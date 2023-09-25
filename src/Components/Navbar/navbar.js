import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import heartIcon from '../../Assets/heart.svg';
import profileIcon from '../../Assets/profile.svg';
import cartIcon from '../../Assets/cart.svg';
import styles from './Navbar.module.css';

function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <Link to="/"  className={styles.left} style={{'text-decoration' :'none', 'color': 'white' }}> 
      
      
        <span className={styles.websiteName}>chaupaalbazaar</span>
        <span className={styles.tagline}>Studio's Signature Finds</span>
       
      
      </Link>
      <div className={styles.right}>
        <div className={styles.option}>
          <a href="#">
            <img src={heartIcon} alt="Orders" className={styles.icon} />
            <span className={styles.iconText}>Orders</span>
          </a>
        </div>
        <div className={styles.option}>
  <Link to="/cart" className={styles.link}>
    <img src={cartIcon} alt="My Cart" className={styles.icon} />
    <span className={styles.iconText}>My Cart</span>
    {props.quantity > 0 && (
      <span className={styles.cartQuantity}>{props.quantity}</span>
    )}
  </Link>
</div>
        <div className={styles.option}>
          <a href="#">
            <img src={profileIcon} alt="Profile" className={styles.icon} />
            <span className={styles.iconText}>Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
