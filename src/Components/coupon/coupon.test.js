/* eslint-disable testing-library/prefer-screen-queries */
// CouponInput.test.js

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import CouponInput from './coupon'; // Import the CouponInput component

test('renders component with input and button', () => {
  const { getByText, getByPlaceholderText } = render(<CouponInput />);
  
  // Test for the presence of the "Have a coupon?" text
  const couponText = getByText('Have a coupon?');
  expect(couponText).toBeInTheDocument();
  
  // Test for the presence of the input element with a placeholder
  const inputElement = getByPlaceholderText('Add Coupon');
  expect(inputElement).toBeInTheDocument();
  
  // Test for the presence of the "Apply" button
  const applyButton = getByText('Apply');
  expect(applyButton).toBeInTheDocument();
});

test('handles input change correctly', () => {
  const { getByPlaceholderText } = render(<CouponInput />);
  
  // Get the input element
  const inputElement = getByPlaceholderText('Add Coupon');
  
  // Simulate typing into the input
  fireEvent.change(inputElement, { target: { value: 'coupon123' } });
  
  // Verify that the input value is updated
  expect(inputElement.value).toBe('coupon123');
});

// You can add more test cases as needed to cover other component behavior
