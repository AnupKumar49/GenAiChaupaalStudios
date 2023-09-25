// Buttons.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import Buttons from './Button'; // Import the Buttons component

test('renders "Back to Shop" button', () => {
  const { getByText } = render(<Buttons />);
  
  // Test for the presence of the "Back to Shop" button
  const backButton = getByText('Back to Shop');
  
  // Expect the button to be in the document
  expect(backButton).toBeInTheDocument();
  expect(backButton).toHaveClass('backButton'); // Check if it has the correct class
});

test('renders "Remove all" button', () => {
  const { getByText } = render(<Buttons />);
  
  // Test for the presence of the "Remove all" button
  const removeAllButton = getByText('Remove all');
  
  // Expect the button to be in the document
  expect(removeAllButton).toBeInTheDocument();
  expect(removeAllButton).toHaveClass('removeAllButton'); // Check if it has the correct class
});

// Add more test cases as needed for other parts of the Buttons component
