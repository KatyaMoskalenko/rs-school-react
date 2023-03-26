import CreateProductForm from 'components/add-product-form/AddProductForm';
import ProductCard from 'components/product-card/ProductCard';
import React from 'react';
import { Product } from 'utils/interfaces';
import './CreateNewProduct.scss';

export interface CreateNewProductState {
  products: Product[];
}

class CreateNewProduct extends React.Component<Record<string, never>, CreateNewProductState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      products: [],
    };
    this.updateNewProductsList = this.updateNewProductsList.bind(this);
  }
  updateNewProductsList(products: Product[]): void {
    this.setState({ products });
  }
  render(): React.ReactNode {
    return (
      <>
        <CreateProductForm updateNewProductsList={this.updateNewProductsList} />
        <div className="cards-list">
          {this.state.products.map((card: Product) => (
            <ProductCard key={card.title} card={card} />
          ))}
        </div>
      </>
    );
  }
}

export default CreateNewProduct;
