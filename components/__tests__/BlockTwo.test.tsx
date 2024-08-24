import React from 'react';
import { render, screen } from '@testing-library/react';
import BlockTwoComponent from '../BlockTwo.component';
import BlockCardComponent from '../ui/BlockCard.uicomponent';
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

describe('BlockTwoComponent', () => {
  test('renders correctly', () => {
    render(<BlockTwoComponent />);
    expect(screen.getByTestId('block-card')).toBeInTheDocument();
  });

  test('passes correct props to BlockCardComponent', () => {
    render(<BlockTwoComponent />);
    const { title, description, imageSrc, link } = cardsData[1];

    expect(screen.getByAltText(title)).toHaveAttribute('src', imageSrc);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText('Link')).toHaveAttribute('href', link);
  });
});