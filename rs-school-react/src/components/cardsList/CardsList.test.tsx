import { render, fireEvent } from '@testing-library/react';
import CardsList from './CardsList';
import React from 'react';

const mockProductCards = [
  {
    id: 1,
    name: 'The Hobbit',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    gender: 'Male',
    created: '2022-12-12',
    location: { name: 'Minsk', url: 'hbvfjk' },
  },
  {
    id: 2,
    name: 'The Hobbit 2',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    gender: 'Female',
    created: '2022-12-21',
    location: { name: 'Grodno', url: 'ykk' },
  },
];

describe('CardsList', () => {
  it('renders product cards correctly', () => {
    const { getByText } = render(
      <CardsList productCards={mockProductCards} openModal={() => {}} />
    );

    expect(getByText('The Hobbit')).toBeInTheDocument();
    expect(getByText('The Hobbit 2')).toBeInTheDocument();
  });

  it('calls openModal when a card is clicked', () => {
    const mockOpenModal = jest.fn();
    const { getByText } = render(
      <CardsList productCards={mockProductCards} openModal={mockOpenModal} />
    );

    fireEvent.click(getByText('The Hobbit'));
    expect(mockOpenModal).toHaveBeenCalledWith(mockProductCards[0]);

    fireEvent.click(getByText('The Hobbit 2'));
    expect(mockOpenModal).toHaveBeenCalledWith(mockProductCards[1]);
  });
});
