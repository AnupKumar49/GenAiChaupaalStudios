/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the Navbar', () => {
    const { getByTestId } = render(<Header />);
    const navbarElement = getByTestId('header-navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  it('renders the Navbar Toggle', () => {
    const { getByTestId } = render(<Header />);
    const navbarToggleElement = getByTestId('navbar-toggle');
    expect(navbarToggleElement).toBeInTheDocument();
  });

  it('renders the Navbar Collapse', () => {
    const { getByTestId } = render(<Header />);
    const navbarCollapseElement = getByTestId('navbar-collapse');
    expect(navbarCollapseElement).toBeInTheDocument();
  });

  // Add more test cases for specific elements and behaviors
});
