import ProductCard from 'components/product-card/ProductCard';
import Search from 'components/search/Search';
import React, { useState } from 'react';
import { products } from 'shared/mocks';
import { Product } from 'utils/interfaces';
import './Home.scss';

export default function Home(): ReturnType<React.FC> {
  const [productCards] = useState<Product[]>(products);

  return (
    <div>
      <Search />
      <div className="cards-list">
        {productCards.map((card: Product) => (
          <ProductCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
