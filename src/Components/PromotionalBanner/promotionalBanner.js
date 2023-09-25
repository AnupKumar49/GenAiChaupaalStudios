import React from 'react';
import './promotionbanner.css'

const PromotionBanner = () => {
  return (
    <div className="promotion-banner">
      <div className="promotion-banner-content">
        <div className="promotion-banner-content-body">
        <h3 className="promotion-banner-title">Special Offer!</h3>
        <p className="promotion-banner-description">Get 20% off on selected items. Limited time offer.</p>
        </div>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default PromotionBanner;
