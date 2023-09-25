// CartItem.test.js

import React from 'react';
import { render } from '@testing-library/react';
import CartItem from './cartItem';

// Test suite for the CartItem component
describe('CartItem Component', () => {
  // Test case 1: Renders without crashing
  it('should render without crashing', () => {
    const { getByText } = render(<CartItem />);
    // Assert that the component renders without errors
    expect(getByText('Product Name')).toBeInTheDocument();
  });

  // Test case 2: Renders product details correctly
  it('should render product details correctly', () => {
    const { getByText } = render(<CartItem />);
    // Assert that product details are displayed correctly
    expect(getByText('Size: M')).toBeInTheDocument();
    expect(getByText('Color: Blue')).toBeInTheDocument();
    expect(getByText('Material: Cotton')).toBeInTheDocument();
    expect(getByText('Seller: Seller Name')).toBeInTheDocument();
  });

  // Test case 3: Renders buttons correctly
  it('should render buttons correctly', () => {
    const { getByText } = render(<CartItem />);
    // Assert that both buttons are displayed
    expect(getByText('Remove')).toBeInTheDocument();
    expect(getByText('Save For Later')).toBeInTheDocument();
  });

  // Test case 4: Renders product price correctly
  it('should render product price correctly', () => {
    const { getByText } = render(<CartItem />);
    // Assert that the product price is displayed
    expect(getByText('$99.99')).toBeInTheDocument();
  });
});
