import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

describe('Card', () => {
  const props = {
    title: 'Pizza',
    date: '2023-03-26',
    isVegan: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isNoDietary: false,
    isAvailable: true,
    weight: '250',
    imageSrc: 'https://source.unsplash.com/collection/8613861/350x210',
    price: '80',
    id: 2,
  };

  it('render the card with right data', () => {
    render(<ProductCard card={props} />);
    expect(screen.getByText(/Pizza/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-03-26/i)).toBeInTheDocument();
    expect(screen.getByText(/Gluten Free/i)).toBeInTheDocument();
    expect(screen.getByText(/Lactose Free/i)).toBeInTheDocument();
    expect(screen.getByText(/Vegan/i)).toBeInTheDocument();
  });
});
