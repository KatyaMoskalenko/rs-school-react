import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).not.toBeRequired();
    expect(screen.getAllByText(/Home/i)).toHaveLength(2);
    expect(screen.getAllByText(/About Us/i)).toHaveLength(1);
  });
});
