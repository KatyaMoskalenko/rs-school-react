import ProductCard from 'components/product-card/ProductCard';
import Search from 'components/search/Search';
import React, { useState } from 'react';
import './Home.scss';
import BookCard from 'components/book-card/BookCard';

export interface Book {
  id: number;
  name: string;
}

export default function Home(): ReturnType<React.FC> {
  const [productCards, setProductCards] = useState<Book[]>([]);

  return (
    <div className="card-list-container">
      <Search updateProductCards={setProductCards} />
      <div className="card-list">
        {productCards.map((card: Book) => (
          <BookCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
