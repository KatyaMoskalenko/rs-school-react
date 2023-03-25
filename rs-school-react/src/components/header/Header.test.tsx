import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';
import { generateHeaderName } from './Header';

describe('Header', () => {
  it('renders Header component', () => {
    render(<App />);
    expect(generateHeaderName('/')).toBe('Home');
    expect(generateHeaderName('/about')).toBe('About Us');
    expect(generateHeaderName('/create')).toBe('Create New Product');
    expect(generateHeaderName('sfbdgb')).toBe('Error');
  });
});
