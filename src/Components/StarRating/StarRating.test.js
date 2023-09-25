import React from 'react';
import { render, screen } from '@testing-library/react';
import StarRating from './starRating';

describe('StarRating Component', () => {
  it('renders the star rating', () => {
    render(<StarRating averageRating={4.5} totalReviews={42} />);
    
    // Check if the star rating component is rendered
    const starRatingElement = screen.getByTestId('star-rating');
    expect(starRatingElement).toBeInTheDocument();

    // Check if the average rating is displayed
    const averageRatingElement = screen.getByText('4.5/5');
    expect(averageRatingElement).toBeInTheDocument();

    // Check if the total reviews count is displayed
    const totalReviewsElement = screen.getByText('42 reviews');
    expect(totalReviewsElement).toBeInTheDocument();
  });

  // Add more test cases as needed
});
