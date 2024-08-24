import React from 'react';
import { render, screen } from '@testing-library/react';
import AppLayout from '../AppLayout.component';
import { useRouter } from 'next/router';
import HeaderComponent from '../header/Header.component';

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
  }));


jest.mock('../header/Header.component', () => () => <div data-testid="header-component">Header</div>);

describe('AppLayout Component', () => {
    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
          pathname: '/block-one',
        });
      });

  test('renders HeaderComponent', () => {
    render(<AppLayout>Test Children</AppLayout>);
    expect(screen.getByTestId('header-component')).toBeInTheDocument();
  });

  test('renders correct links', () => {
    render(<AppLayout>Test Children</AppLayout>);
    const links = ["block one", "block two", "block three"];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  test('renders children correctly', () => {
    render(<AppLayout>Test Children</AppLayout>);
    expect(screen.getByText('Test Children')).toBeInTheDocument();
  });
});