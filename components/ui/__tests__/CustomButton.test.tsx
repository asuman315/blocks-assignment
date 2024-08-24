import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomButton from '../CustomButton.uicomponent';
import { CustomButtonComponentProps } from '../../components.types';

describe('CustomButton', () => {
  const defaultProps: CustomButtonComponentProps = {
    label: 'Click Me',
    textColor: 'text-white',
    bgColor: 'bg-blue-500',
    hoverBgColor: 'bg-blue-700',
    hoverTextColor: 'text-gray-200',
    paddingX: 'px-4',
    paddingY: 'py-2',
    textSize: 'text-lg',
    rounded: 'rounded-full',
    border: 'border border-gray-300',
    fontWeight: 'font-bold',
    onClick: jest.fn(),
  };

  test('renders correctly with given props', () => {
    render(<CustomButton {...defaultProps} />);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
  });

  test('displays the correct label', () => {
    render(<CustomButton {...defaultProps} />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveTextContent('Click Me');
  });

  test('applies the correct classes based on props', () => {
    render(<CustomButton {...defaultProps} />);
    const button = screen.getByText('Click Me');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('bg-blue-500');
    expect(button).toHaveClass('hover:bg-blue-700');
    expect(button).toHaveClass('hover:text-gray-200');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-2');
    expect(button).toHaveClass('text-lg');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-gray-300');
    expect(button).toHaveClass('font-bold');
  });

  test('calls onClick handler when clicked', () => {
    render(<CustomButton {...defaultProps} />);
    const button = screen.getByText('Click Me');
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });
});