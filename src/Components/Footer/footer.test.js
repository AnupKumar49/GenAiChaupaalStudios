// Footer.test.js

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import Footer from './footer'; // Import the Footer component

test('renders website name and tagline', () => {
  const { getByText } = render(<Footer />);
  
  // Test for the presence of the website name and tagline
  const websiteName = getByText('chaupaalbazaar');
  const tagline = getByText("Studio's signature finds");
  
  // Expect the website name and tagline to be in the document
  expect(websiteName).toBeInTheDocument();
  expect(tagline).toBeInTheDocument();
});

test('renders social media icons', () => {
  const { getByTestId } = render(<Footer />);
  
  // Test for the presence of social media icons
  const facebookIcon = getByTestId('facebook-icon');
  const twitterIcon = getByTestId('twitter-icon');
  const instagramIcon = getByTestId('instagram-icon');
  const linkedinIcon = getByTestId('linkedin-icon');
  const pinterestIcon = getByTestId('pinterest-icon');
  
  // Expect the social media icons to be in the document
  expect(facebookIcon).toBeInTheDocument();
  expect(twitterIcon).toBeInTheDocument();
  expect(instagramIcon).toBeInTheDocument();
  expect(linkedinIcon).toBeInTheDocument();
  expect(pinterestIcon).toBeInTheDocument();
});

// Add more test cases for other parts of the Footer component as needed
