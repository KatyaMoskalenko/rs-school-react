import React from 'react';
import { render, screen } from '@testing-library/react';
import CreateNewProduct from 'pages/create-new-product/CreateNewProduct';

describe('CreateProductForm', () => {
  it('renders AboutUs component', () => {
    render(<CreateNewProduct />);
    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Weight/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Start date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/vegan/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Lactose Free/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gluten Free/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Is Available/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });
});
