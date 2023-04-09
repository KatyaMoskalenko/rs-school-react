import { render, screen } from '@testing-library/react';
import { products } from './mocks';
import React from 'react';

describe('products', () => {
  it('renders the correct product information', () => {
    render(
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.imageSrc} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.weight}</p>
            {product.isAvailable ? <p>Available</p> : <p>Not available</p>}
          </div>
        ))}
      </div>
    );

    expect(screen.getByText(/Muffin/i)).toBeInTheDocument();
  });
});
