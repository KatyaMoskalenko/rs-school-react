import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders app component', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  const { getByText } = render(<App />);

  const linkElement = getByText(/Create New Product/i);
  expect(linkElement).toBeInTheDocument();
});
