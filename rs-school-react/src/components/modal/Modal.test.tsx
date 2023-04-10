import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { Book } from 'pages/home/Home';
import React from 'react';

describe('Modal', () => {
  const mockSetIsModalOpen = jest.fn();
  const mockCard: Book = {
    id: 1,
    name: 'Book name',
    gender: 'Male',
    location: { name: 'Location name', url: 'fhfkjn' },
    created: '2022-04-09',
    image: 'https://example.com/image.jpg',
  };

  test('renders modal with card details', () => {
    render(<Modal card={mockCard} setIsModalOpen={mockSetIsModalOpen} />);

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    const cardTitle = screen.getByText(mockCard.name);
    const cardGender = screen.getByText(`Gender: ${mockCard.gender}`);
    const cardLocation = screen.getByText(`Location: ${mockCard.location.name}`);
    const cardDate = screen.getByText(`Created: ${mockCard.created.slice(0, 10)}`);
    const cardImage = screen.getByRole('img');
    expect(cardTitle).toBeInTheDocument();
    expect(cardGender).toBeInTheDocument();
    expect(cardLocation).toBeInTheDocument();
    expect(cardDate).toBeInTheDocument();
    expect(cardImage).toHaveAttribute('src', mockCard.image);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(mockSetIsModalOpen).toHaveBeenCalledWith(false);
  });
});
