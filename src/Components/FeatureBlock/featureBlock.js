// FeatureBlocks.js

import React from 'react';
import styles from './featureBlock.module.css'; // Import the CSS modules
import lock from '../../Assets/lock.png';
import truck from '../../Assets/truck.png';
import message from '../../Assets/message.png';


function FeatureBlocks() {
  return (
    <div className={styles.featureBlocks}>
      {/* First Block */}
      <div className={styles.block}>
        <img src={lock}alt="Secure Payment" className={styles.image} />
        <div className={styles.text}>
          <h2 className={styles.heading}>Secure Payment</h2>
          <p className={styles.subHeading}>Have you ever finally just</p>
        </div>
      </div>

      {/* Second Block */}
      <div className={styles.block}>
        <img src={message} alt="Customer Support" className={styles.image} />
        <div className={styles.text}>
          <h2 className={styles.heading}>Customer Support</h2>
          <p className={styles.subHeading}>Have you ever finally just</p>
        </div>
      </div>

      {/* Third Block */}
      <div className={styles.block}>
        <img src={truck} alt="Free Delivery" className={styles.image} />
        <div className={styles.text}>
          <h2 className={styles.heading}>Free Delivery</h2>
          <p className={styles.subHeading}>Have you ever finally just</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureBlocks;
