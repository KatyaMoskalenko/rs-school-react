import CreateProductForm from 'components/add-product-form/AddProductForm';
import ProductCard from 'components/product-card/ProductCard';
import React, { useState } from 'react';
import { Product } from 'utils/interfaces';
import './CreateNewProduct.scss';

export interface CreateNewProductState {
  products: Product[];
}

export default function CreateNewProduct(): ReturnType<React.FC> {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <>
      <CreateProductForm
        updateNewProductsList={() => {
          setProducts(products);
        }}
      />
      <div className="cards-list">
        {products.map((card: Product) => (
          <ProductCard key={card.title} card={card} />
        ))}
      </div>
    </>
  );
}
