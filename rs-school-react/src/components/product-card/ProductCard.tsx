import React from 'react';
import { Product } from 'utils/interfaces';
import './ProductCard.scss';

interface ProductProps {
  card: Product;
}

export default function ProductCard({ card }: ProductProps): ReturnType<React.FC> {
  return (
    <div className="card" data-testid="product-card">
      <img className="card-image" src={card.imageSrc} />
      <>
        <div className="card-price">{card.price}$</div>
        <div className="card-title">{card.title}</div>
        <div className="card-weight">{card.weight}g</div>
      </>
      <div className="card-date">{card.date && <div>{card.date}</div>}</div>
      <div className="card-tags">
        {card.isGlutenFree && <div>Gluten Free</div>}
        {card.isVegan && <div>Vegan</div>}
        {card.isLactoseFree && <div>Lactose Free</div>}
      </div>
      {card.isAvailable && (
        <button className="card-button">
          <svg
            className="card-button__icon"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="card-button__text">Add to cart</span>
        </button>
      )}
    </div>
  );
}
