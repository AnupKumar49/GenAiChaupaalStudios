// CartSummary.test.js

import React from 'react';
import { render } from '@testing-library/react';
import CartSummary from './cartSummary';

// Test suite for the CartSummary component
describe('CartSummary Component', () => {
  // Test case 1: Renders without crashing
  it('should render without crashing', () => {
    const { getByText } = render(<CartSummary />);
    // Assert that the component renders without errors
    expect(getByText('Subtotal:')).toBeInTheDocument();
  });

  // Test case 2: Renders summary items correctly
  it('should render summary items correctly', () => {
    const { getByText } = render(<CartSummary />);
    // Assert that summary items are displayed correctly
    expect(getByText('Subtotal:')).toBeInTheDocument();
    expect(getByText('$99.99')).toBeInTheDocument();
    expect(getByText('Discount:')).toBeInTheDocument();
    expect(getByText('- $10.00')).toBeInTheDocument();
    expect(getByText('Tax:')).toBeInTheDocument();
    expect(getByText('+ $7.50')).toBeInTheDocument();
  });

  // Test case 3: Renders total correctly
  it('should render total correctly', () => {
    const { getByText } = render(<CartSummary />);
    // Assert that the total is displayed correctly
    expect(getByText('Total:')).toBeInTheDocument();
    expect(getByText('$97.49')).toBeInTheDocument();
  });

  // Test case 4: Renders checkout button correctly
  it('should render checkout button correctly', () => {
    const { getByText } = render(<CartSummary />);
    // Assert that the checkout button is displayed
    expect(getByText('Checkout')).toBeInTheDocument();
  });

  // Test case 5: Renders payment method icons correctly
  it('should render payment method icons correctly', () => {
    const { getByAltText } = render(<CartSummary />);
    // Assert that payment method icons are displayed with alt text
    expect(getByAltText('Visa')).toBeInTheDocument();
    expect(getByAltText('MasterCard')).toBeInTheDocument();
    expect(getByAltText('PayPal')).toBeInTheDocument();
    expect(getByAltText('American Express')).toBeInTheDocument();
  });
});
