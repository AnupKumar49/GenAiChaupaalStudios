import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './reviewRating.css'

const ReviewRating = () => {
  const [reviews, setReviews] = useState([
    {
      "id": 1,
      "user": "John Doe",
      "rating": 4,
      "review": "Great product! I highly recommend it. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac libero sed neque tempor lacinia. Vivamus a mauris non libero tincidunt condimentum."
    },
    {
      "id": 2,
      "user": "Jane Smith",
      "rating": 5,
      "review": "Excellent quality and fast delivery. Nulla facilisi. Sed aliquet varius bibendum. Proin nec ullamcorper leo. Vivamus suscipit tristique enim."
    },
    {
      "id": 3,
      "user": "Bob Johnson",
      "rating": 3,
      "review": "It's okay, could be better. Ut ut arcu vel neque sollicitudin viverra. Duis nec augue nec arcu iaculis hendrerit."
    }
  ]);

  return (
    <div className='review-rating'>
      <h2 className="my-4">Reviews & Ratings</h2>
      {reviews.map((review) => (
        <Row key={review.id} className="mb-4">
          <Col xs={12}>
            <Card className="border-0">
              <Card.Body className="p-0">
                <Card.Title className="text-left">
                  {review.user}
                </Card.Title>
                <div className="text-left mb-3">
                  <StarRatings
                    rating={review.rating}
                    starRatedColor="gold"
                    numberOfStars={5}
                    starDimension="25px"
                    starSpacing="2px"
                    editing={false}
                    name={`rating-${review.id}`}
                    isAggregateRating
                  />
                </div>
                <Card.Text className="text-left">{review.review}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default ReviewRating;
