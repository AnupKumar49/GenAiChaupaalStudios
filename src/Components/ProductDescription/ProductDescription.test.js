import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductDescription from './productDescription';

describe('ProductDescription Component', () => {
  it('renders the product title', () => {
    render(<ProductDescription />);
    const titleElement = screen.getByText(/Studio Chaupaal - Half Sleeves - Branded Custom T-Shirt/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the product price', () => {
    render(<ProductDescription />);
    const priceElement = screen.getByText(/Our discounted Price \$49.99/i);
    expect(priceElement).toBeInTheDocument();
  });

  it('increments and decrements quantity when buttons are clicked', () => {
    render(<ProductDescription />);
    const quantityInput = screen.getByLabelText('Select Quantity:');
    const incrementButton = screen.getByText('Add to Cart');
    const decrementButton = screen.getByText('Reset');

    fireEvent.change(quantityInput, { target: { value: '3' } });
    fireEvent.click(incrementButton);
    expect(quantityInput.value).toBe('4');

    fireEvent.click(decrementButton);
    expect(quantityInput.value).toBe('3');
  });

  it('disables "Reset" button when not added to cart', () => {
    render(<ProductDescription />);
    const resetButton = screen.getByText('Reset');
    expect(resetButton).toBeDisabled();
  });

  it('enables "Reset" button when added to cart', () => {
    render(<ProductDescription />);
    const addToCartButton = screen.getByText('Add to Cart');
    const resetButton = screen.getByText('Reset');

    fireEvent.click(addToCartButton);
    expect(resetButton).not.toBeDisabled();
  });

  // Add more test cases for specific elements and behaviors
});
