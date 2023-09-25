import React from 'react';
import { render, screen } from '@testing-library/react';
import SimilarItem from './SimilarItem';

const sampleSimilarProducts = [
  {
    name: 'Product 1',
    price: '19.99',
    image: '/product1.jpg',
  },
  {
    name: 'Product 2',
    price: '24.99',
    image: '/product2.jpg',
  },
  // Add more sample similar products as needed
];

describe('SimilarItem Component', () => {
  it('renders the title', () => {
    render(<SimilarItem similarProducts={sampleSimilarProducts} />);
    const titleElement = screen.getByText(/Frequently Bought/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders similar product cards', () => {
    render(<SimilarItem similarProducts={sampleSimilarProducts} />);
    sampleSimilarProducts.forEach((product) => {
      const productCardElement = screen.getByAltText(product.name);
      expect(productCardElement).toBeInTheDocument();

      const productNameElement = screen.getByText(product.name);
      expect(productNameElement).toBeInTheDocument();

      const productPriceElement = screen.getByText(`$${product.price}`);
      expect(productPriceElement).toBeInTheDocument();
    });
  });

  // Add more test cases as needed
});
