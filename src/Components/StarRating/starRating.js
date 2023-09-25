import React from 'react';
import StarRatings from 'react-star-ratings';
import './starRating.css'


const StarRating = ({ averageRating, totalReviews }) => {
  return (
    <div className="star-rating-container">
      <StarRatings
        rating={averageRating}
        starRatedColor="gold"
        numberOfStars={5}
        starDimension="25px"
        starSpacing="2px"
        name="rating"
        isAggregateRating
      />
      <div className="star-rating-text">
        <p>{averageRating}/5</p>
        <p>{totalReviews} reviews</p>
      </div>
    </div>
  );
};

export default StarRating;
