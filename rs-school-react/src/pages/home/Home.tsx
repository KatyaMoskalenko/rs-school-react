import ProductCard from 'components/product-card/ProductCard';
import Search from 'components/search/Search';
import React from 'react';
import { products } from 'shared/mocks';
import { Product } from 'utils/interfaces';
import './Home.scss';

interface ProductCardState {
  productCards: Product[];
}

class Home extends React.Component<Record<string, never>, ProductCardState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      productCards: products,
    };
  }
  render() {
    return (
      <div>
        <Search />
        <div className="cards-list">
          {this.state.productCards.map((card: Product) => (
            <ProductCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
