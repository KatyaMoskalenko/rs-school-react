import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
  it('renders AboutUs component', () => {
    render(<AboutUs />);
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
  });
});
