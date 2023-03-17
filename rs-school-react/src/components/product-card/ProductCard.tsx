import React from 'react';
import { Product } from 'utils/interfaces';
import './ProductCard.scss';

interface ProductProps {
  card: Product;
}

class ProductCard extends React.Component<ProductProps, Record<string, never>> {
  constructor(props: ProductProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <img className="card-image" src={this.props.card.imageSrc} />
        <>
          <div className="card-price">{this.props.card.price}$</div>
          <div className="card-title">{this.props.card.title}</div>
          <div className="card-weight">{this.props.card.weight}g</div>
        </>
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
          <span className="card-button__text">Добавить</span>
        </button>
      </div>
    );
  }
}

export default ProductCard;
