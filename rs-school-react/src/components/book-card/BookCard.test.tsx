import React from 'react';
import { render } from '@testing-library/react';
import BookCard from './BookCard';

describe('BookCard', () => {
  it('renders the book name', () => {
    const book = {
      id: 1,
      name: 'The Hobbit',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      gender: 'Male',
      created: '2022-12-12',
      location: { name: 'Minsk', url: 'hbvfjk' },
    };
    const { getByText } = render(<BookCard card={book} />);
    const titleElement = getByText(book.name);
    expect(titleElement).toBeInTheDocument();
  });
});
