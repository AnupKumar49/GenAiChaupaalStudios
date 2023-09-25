// SavedForLater.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import SavedForLater from './savedForLateravedForLater'; // Import the SavedForLater component

test('renders component with sample products', () => {
  const { getByText, getByAltText } = render(<SavedForLater />);
  
  // Test for the presence of sample product names and prices
  const product1Name = getByText('Product 1');
  const product1Price = getByText('$19.99');
  
  const product2Name = getByText('Product 2');
  const product2Price = getByText('$24.99');
  
  const product3Name = getByText('Product 3');
  const product3Price = getByText('$29.99');
  
  // Expect the product names and prices to be in the document
  expect(product1Name).toBeInTheDocument();
  expect(product1Price).toBeInTheDocument();
  expect(product2Name).toBeInTheDocument();
  expect(product2Price).toBeInTheDocument();
  expect(product3Name).toBeInTheDocument();
  expect(product3Price).toBeInTheDocument();
});

test('renders "Move to Cart" buttons for each product', () => {
  const { getAllByText } = render(<SavedForLater />);
  
  // Test for the presence of "Move to Cart" buttons
  const moveButtons = getAllByText('Move to Cart');
  
  // Expect the correct number of "Move to Cart" buttons
  expect(moveButtons.length).toBe(3);
});

// Add more test cases as needed for other parts of the SavedForLater component
