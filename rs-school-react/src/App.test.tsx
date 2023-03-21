import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).not.toBeRequired();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
