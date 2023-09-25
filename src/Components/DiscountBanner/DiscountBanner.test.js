// DiscountBanner.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import DiscountBanner from './DiscountBanner'; // Import the DiscountBanner component

test('renders heading and subheading', () => {
  const { getByText } = render(<DiscountBanner />);
  
  // Test for the presence of the heading and subheading
  const heading = getByText('Super discount on more than 100 USD');
  const subheading = getByText('Have you ever finally just while dummy info');
  
  // Expect the heading and subheading to be in the document
  expect(heading).toBeInTheDocument();
  expect(subheading).toBeInTheDocument();
});

test('renders "Shop now" button', () => {
  const { getByText } = render(<DiscountBanner />);
  
  // Test for the presence of the "Shop now" button
  const shopNowButton = getByText('Shop now');
  
  // Expect the button to be in the document
  expect(shopNowButton).toBeInTheDocument();
  expect(shopNowButton).toHaveClass('shopNowButton'); // Check if it has the correct class
});

// Add more test cases as needed for other parts of the DiscountBanner component
