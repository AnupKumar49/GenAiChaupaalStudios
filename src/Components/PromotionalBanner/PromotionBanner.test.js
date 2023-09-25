import React from 'react';
import { render, screen } from '@testing-library/react';
import PromotionBanner from './PromotionBanner';

describe('PromotionBanner Component', () => {
  it('renders the title', () => {
    render(<PromotionBanner />);
    const titleElement = screen.getByText(/Special Offer!/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the description', () => {
    render(<PromotionBanner />);
    const descriptionElement = screen.getByText(/Get 20% off on selected items. Limited time offer./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders the "Shop Now" button', () => {
    render(<PromotionBanner />);
    const buttonElement = screen.getByText(/Shop Now/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the component with the correct CSS class', () => {
    render(<PromotionBanner />);
    const bannerElement = screen.getByTestId('promotion-banner');
    expect(bannerElement).toHaveClass('promotion-banner');
  });

  // Add more test cases for specific elements and behaviors
});
