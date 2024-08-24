import React from 'react';
import { render, screen } from '@testing-library/react';
import HeaderComponent from '../Header.component';

jest.mock('../DesktopHeader.component', () => () => <div data-testid="desktop-header">Desktop Header</div>);
jest.mock('../MobileHeader.component', () => () => <div data-testid="mobile-header">Mobile Header</div>);

describe('HeaderComponent', () => {
  test('renders correctly', () => {
    render(<HeaderComponent />);
    expect(screen.getByTestId('desktop-header')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-header')).toBeInTheDocument();
  });
});