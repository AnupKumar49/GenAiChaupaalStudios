/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Description from './description';

// Mock data
const title = 'Product Description';
const content = '<p>This is the product description.</p>';

describe('Description Component', () => {
  it('renders title correctly', () => {
    const { getByText } = render(<Description title={title} content={content} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders content correctly', () => {
    const { getByText } = render(<Description title={title} content={content} />);
    const contentElement = getByText('This is the product description.', { exact: false });
    expect(contentElement).toBeInTheDocument();
  });

  it('renders ReactQuill component', () => {
    const { getByTestId } = render(<Description title={title} content={content} />);
    const reactQuill = getByTestId('react-quill');
    expect(reactQuill).toBeInTheDocument();
  });
});
