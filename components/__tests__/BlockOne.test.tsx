import React from 'react';
import { render, screen } from '@testing-library/react';
import BlockOne from '../BlockOne.component';
import { cardsData } from '../components.mocks';
import { BlockCardComponentProps } from '../components.types';

jest.mock('../ui/BlockCard.uicomponent', () => (props: BlockCardComponentProps) => (
  <div data-testid="block-card">
    <img src={props.imageSrc} alt={props.title} />
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <a href={props.link}>Link</a>
  </div>
));

describe('BlockOne Component', () => {
  test('renders correctly', () => {
    render(<BlockOne />);
    expect(screen.getByTestId('block-card')).toBeInTheDocument();
  });

  test('passes correct props to BlockCardComponent', () => {
    render(<BlockOne />);
    const { title, description, imageSrc, link } = cardsData[0];

    expect(screen.getByAltText(title)).toHaveAttribute('src', imageSrc);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText('Link')).toHaveAttribute('href', link);
  });
});