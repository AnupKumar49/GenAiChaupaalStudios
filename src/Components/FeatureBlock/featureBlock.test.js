// FeatureBlocks.test.js

import React from 'react';
import { render } from '@testing-library/react';
import FeatureBlocks from './featureBlock';

// Test suite for the FeatureBlocks component
describe('FeatureBlocks Component', () => {
  // Test case 1: Renders without crashing
  it('should render without crashing', () => {
    const { getByText } = render(<FeatureBlocks />);
    // Assert that the component renders without errors
    expect(getByText('Secure Payment')).toBeInTheDocument();
  });

  // Test case 2: Renders block headings and sub-headings correctly
  it('should render block headings and sub-headings correctly', () => {
    const { getByText } = render(<FeatureBlocks />);
    // Assert that block headings and sub-headings are displayed correctly
    expect(getByText('Secure Payment')).toBeInTheDocument();
    expect(getByText('Have you ever finally just')).toBeInTheDocument();
    expect(getByText('Customer Support')).toBeInTheDocument();
    expect(getByText('Free Delivery')).toBeInTheDocument();
  });

  // Test case 3: Renders block images correctly
  it('should render block images correctly', () => {
    const { getByAltText } = render(<FeatureBlocks />);
    // Assert that block images are displayed with alt text
    expect(getByAltText('Secure Payment')).toBeInTheDocument();
    expect(getByAltText('Customer Support')).toBeInTheDocument();
    expect(getByAltText('Free Delivery')).toBeInTheDocument();
  });
});
