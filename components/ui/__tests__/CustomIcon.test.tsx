import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlockCardComponent from '../BlockCard.uicomponent'
import { BlockCardComponentProps } from '../../components.types';

describe('BlockCardComponent', () => {
  const props: BlockCardComponentProps = {
    imageSrc: 'test-image.jpg',
    title: 'Test Title',
    description: 'Test Description',
    link: 'https://example.com',
  };

  test('renders correctly with given props', () => {
    render(<BlockCardComponent {...props} />);
    expect(screen.getByAltText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('initial state is correct', () => {
    render(<BlockCardComponent {...props} />);
    expect(screen.queryByText('No comments yet')).toBeInTheDocument();
    expect(screen.queryByText('No comments yet! Add one to start the conversation.')).toBeInTheDocument();
  });

  test('renders image with correct src and alt attributes', () => {
    render(<BlockCardComponent {...props} />);
    const image = screen.getByAltText('Test Title');
    expect(image).toHaveAttribute('src', 'test-image.jpg');
  });

  test('handles button clicks', () => {
    render(<BlockCardComponent {...props} />);
    const saveButton = screen.getAllByText('Save')[0];
    fireEvent.click(saveButton);
    // Add assertions for button click actions if any
  });

  test('handles comment input and submission', () => {
    render(<BlockCardComponent {...props} />);
    const textarea = screen.getByPlaceholderText('Add a comment');
    fireEvent.change(textarea, { target: { value: 'Test Comment' } });
    expect(textarea).toHaveValue('Test Comment');

    const submitButton = screen.getByText('➤');
    fireEvent.click(submitButton);
    expect(screen.getByText('Test Comment')).toBeInTheDocument();
  });

  test('handles focus and blur events', () => {
    render(<BlockCardComponent {...props} />);
    const textarea = screen.getByPlaceholderText('Add a comment');
    fireEvent.focus(textarea);
    expect(textarea).toHaveClass('placeholder-gray-400');

    fireEvent.blur(textarea);
    expect(textarea).toHaveClass('placeholder-gray-500');
  });

  test('renders link with correct href attribute', () => {
    render(<BlockCardComponent {...props} />);
    const link = screen.getAllByText('dribble.com')[0].closest('a');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});