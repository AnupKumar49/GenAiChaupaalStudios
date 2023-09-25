// Navbar.test.js

import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for testing routing components
import Navbar from './navbar';

// Mock the image files used in the Navbar component
jest.mock('./heart-icon.png', () => 'heart-icon.png');
jest.mock('./cart-icon.png', () => 'cart-icon.png');
jest.mock('./profile-icon.png', () => 'profile-icon.png');

test('Navbar renders correctly', () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  // Check if the website name and tagline are in the document
  expect(getByText('chaupaalbazaar')).toBeInTheDocument();
  expect(getByText("Studio's Signature Finds")).toBeInTheDocument();
});

test('Navbar links navigate to the correct routes', () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  // Check if the links navigate to the correct routes
  expect(getByText('Orders')).toHaveAttribute('href', '/orders');
  expect(getByText('My Cart')).toHaveAttribute('href', '/cart');
  expect(getByText('Profile')).toHaveAttribute('href', '/profile');
});
