import React from 'react';
import { render, screen } from '@testing-library/react';
import ReviewRating from './ReviewRating';

describe('ReviewRating Component', () => {
  it('renders the title', () => {
    render(<ReviewRating />);
    const titleElement = screen.getByText(/Reviews & Ratings/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders reviews with user names', () => {
    render(<ReviewRating />);
    const userNames = ['John Doe', 'Jane Smith', 'Bob Johnson'];
    userNames.forEach((userName) => {
      const userNameElement = screen.getByText(userName);
      expect(userNameElement).toBeInTheDocument();
    });
  });

  it('renders star ratings for each review', () => {
    render(<ReviewRating />);
    const starRatingElements = screen.getAllByTestId('star-rating');
    expect(starRatingElements).toHaveLength(3); // Assuming there are 3 reviews
  });

  it('renders review text for each review', () => {
    render(<ReviewRating />);
    const reviewTexts = [
      "Great product! I highly recommend it. Lorem ipsum dolor...",
      "Excellent quality and fast delivery. Nulla facilisi...",
      "It's okay, could be better. Ut ut arcu vel neque...",
    ];
    reviewTexts.forEach((text) => {
      const reviewTextElement = screen.getByText(text);
      expect(reviewTextElement).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
