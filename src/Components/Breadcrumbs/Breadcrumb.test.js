/* eslint-disable jest/no-conditional-expect */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

// Breadcrumb.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import Breadcrumb from './Breadcrumb'; // Import the Breadcrumb component

// Define a sample breadcrumb item data for testing
const sampleItems = [
  { id: 1, label: 'Home' },
  { id: 2, label: 'Products' },
  { id: 3, label: 'Category' },
];

describe('Breadcrumb Component', () => {
  it('renders correctly with sample breadcrumb items', () => {
    const { container } = render(<Breadcrumb items={sampleItems} />);
    
    // Test if the breadcrumb container is in the document
    expect(container.querySelector('.breadcrumb-container')).toBeInTheDocument();
    
    // Test if breadcrumb items are rendered correctly
    sampleItems.forEach((item, index) => {
      const breadcrumbItem = container.querySelector(`.breadcrumb-item:nth-child(${index + 1})`);
      expect(breadcrumbItem).toBeInTheDocument();
      expect(breadcrumbItem).toHaveTextContent(item.label);

      if (index < sampleItems.length - 1) {
        const separator = container.querySelector(`.breadcrumb-separator:nth-child(${index + 1})`);
        expect(separator).toBeInTheDocument();
        expect(separator).toHaveTextContent('›');
      }
    });
  });

  it('does not render a separator after the last breadcrumb item', () => {
    const { container } = render(<Breadcrumb items={sampleItems} />);
    
    // Ensure that there is no separator after the last breadcrumb item
    const lastSeparator = container.querySelector('.breadcrumb-separator:last-child');
    expect(lastSeparator).toBeNull();
  });
  
  // Add more test cases as needed
});
