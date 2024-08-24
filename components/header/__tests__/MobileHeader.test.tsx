import React from 'react';
import { render, screen } from '@testing-library/react';
import MobileHeaderComponent from '../MobileHeader.component';
import { icons, iconsTwo } from '../../components.defaults';

describe('MobileHeaderComponent', () => {
  test('renders correctly', () => {
    render(<MobileHeaderComponent />);
    expect(screen.getByText('Summer Sales Discount Learn More')).toBeInTheDocument();
    expect(screen.getByText('My account')).toBeInTheDocument();
    expect(screen.getByText('Checkout')).toBeInTheDocument();
    expect(screen.getByText('MINAMALO')).toBeInTheDocument();
  });

  test('renders saleIcon correctly', () => {
    render(<MobileHeaderComponent />);
    expect(screen.getByTestId('icon-saleIcon')).toBeInTheDocument();
  });

  test('renders humbergerMenuIcon correctly', () => {
    render(<MobileHeaderComponent />);
    expect(screen.getByTestId('icon-humbergerMenuIcon')).toBeInTheDocument();
  });

  test('renders icons correctly', () => {
    render(<MobileHeaderComponent />);
    icons.forEach((icon: string) => {
      expect(screen.getByTestId(`icon-${icon}`)).toBeInTheDocument();
    });
    iconsTwo.forEach((icon: string) => {
      expect(screen.getByTestId(`icon-${icon}`)).toBeInTheDocument();
    });
  });
});