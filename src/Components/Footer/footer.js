// Footer.js

import React from 'react';
import styles from './footer.module.css'; // Import the CSS modules
import GooglePlay from '../../Assets/GooglePlay.jpg';
import PlayStore from '../../Assets/appstore.jpg';
import facebook from '../../Assets/facebook.jpg';
import instagram from '../../Assets/instagram.jpg';
import twitter from '../../Assets/twitter.jpg';
import linkedin from '../../Assets/linked.jpg';
import youtube from '../../Assets/youtube.jpg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.websiteInfo}>
          <h2 className={styles.websiteName}>chaupaalbazaar</h2>
          <p className={styles.tagline}>Studio's Signature Finds</p>
          <p className={styles.companyInfo}>
            Best information about the company gives here but now lorem ipsum is
          </p>
        </div>
        <div className={styles.socialIcons}>
          <img src={facebook} alt="Facebook" className={styles.icon} />
          <img src={twitter}alt="Twitter" className={styles.icon} />
          <img src={instagram} alt="Instagram" className={styles.icon} />
          <img src={linkedin} alt="LinkedIn" className={styles.icon} />
          <img src={youtube} alt="YouTube" className={styles.icon} />
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>About Us</h3>
          <ul className={styles.linkList}>
            <li>About Our Company</li>
            <li>Our Team</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Find Store</h3>
          <ul className={styles.linkList}>
            <li>Store Locations</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Categories</h3>
          <ul className={styles.linkList}>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home & Living</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Blogs</h3>
          <ul className={styles.linkList}>
            <li>Latest Blogs</li>
            <li>Featured Posts</li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <img src={PlayStore} alt="Image 1" className={styles.image} />
        <img src={GooglePlay} alt="Image 2" className={styles.image} />
      </div>
    </footer>
  );
}

export default Footer;
