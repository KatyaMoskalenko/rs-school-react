import CreateProductForm from 'components/add-product-form/AddProductForm';
import React from 'react';

class CreateNewProduct extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <CreateProductForm />
      </>
    );
  }
}

export default CreateNewProduct;
