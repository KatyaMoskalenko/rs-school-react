import { render, fireEvent, screen, act } from '@testing-library/react';
import Search from './Search';
import React from 'react';

jest.mock('node-fetch', () => () => ({
  ok: true,
  json: () => ({
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
      },
      {
        id: 2,
        name: 'Morty Smith',
      },
    ],
  }),
}));

describe('Search component', () => {
  it('should render a search input', () => {
    const updateProductCards = jest.fn();
    const setIsLoading = jest.fn();
    render(<Search updateProductCards={updateProductCards} setIsLoading={setIsLoading} />);
    const input = screen.getByPlaceholderText('Search');
    expect(input).toBeInTheDocument();
  });

  it('should update the product cards when a search is submitted', async () => {
    const updateProductCards = jest.fn();
    const setIsLoading = jest.fn();
    render(<Search updateProductCards={updateProductCards} setIsLoading={setIsLoading} />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Sanchez' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(setIsLoading).toHaveBeenCalledWith(true);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
    });
    expect(setIsLoading).toHaveBeenCalledWith(false);
  });
});
