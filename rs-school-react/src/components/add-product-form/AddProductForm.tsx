import React, { FormEvent } from 'react';
import { Product } from 'utils/interfaces';
import './AddProductForm.scss';

export interface CreateProductFormState {
  products: Product[];
}

export interface CreateProductFormProps {
  updateNewProductsList: (products: Product[]) => void;
}

class CreateProductForm extends React.Component<CreateProductFormProps, CreateProductFormState> {
  constructor(props: CreateProductFormProps) {
    super(props);
    this.state = {
      products: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  private selectRef = React.createRef<HTMLSelectElement>();
  private titleRef = React.createRef<HTMLInputElement>();
  private priceRef = React.createRef<HTMLInputElement>();
  private dateInputRef = React.createRef<HTMLInputElement>();
  private lactoseFreeCheckboxRef = React.createRef<HTMLInputElement>();
  private veganCheckboxRef = React.createRef<HTMLInputElement>();
  private glutenFreeCheckboxRef = React.createRef<HTMLInputElement>();
  private radioRef = React.createRef<HTMLInputElement>();
  private fileInput = React.createRef<HTMLInputElement>();

  private handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newProduct: Product = {
      title: this.titleRef.current?.value || '',
      price: this.priceRef.current?.value || '',
      date: this.dateInputRef.current?.value,
      isVegan: this.veganCheckboxRef.current?.checked,
      isGlutenFree: this.glutenFreeCheckboxRef.current?.checked,
      isLactoseFree: this.lactoseFreeCheckboxRef.current?.checked,
      isAvailable: this.radioRef.current?.checked,
      weight: this.selectRef.current?.value || '',
      imageSrc: this.fileInput.current?.value || '',
    };
    this.setState({ products: [...this.state.products, newProduct] });
    this.props.updateNewProductsList([...this.state.products, newProduct]);
    alert('New Product was added');
    this.clearForm();
  }

  private clearForm(): void {
    this.titleRef.current && (this.titleRef.current.value = '');
    this.priceRef.current && (this.priceRef.current.value = '');
    this.dateInputRef.current && (this.dateInputRef.current.value = '');
    this.veganCheckboxRef.current && (this.veganCheckboxRef.current.checked = false);
    this.glutenFreeCheckboxRef.current && (this.glutenFreeCheckboxRef.current.checked = false);
    this.lactoseFreeCheckboxRef.current && (this.lactoseFreeCheckboxRef.current.checked = false);
    this.radioRef.current && (this.radioRef.current.checked = false);
    this.selectRef.current && (this.selectRef.current.value = '');
    this.fileInput.current && (this.fileInput.current.value = '');
  }

  render(): React.ReactNode {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            Title <input type="text" ref={this.titleRef} />
          </label>
          <label>
            Price <input type="text" ref={this.priceRef} />
          </label>
          <label>
            Weight:
            <select ref={this.selectRef}>
              <option>80</option>
              <option>250</option>
            </select>
          </label>
          <label>
            Start date:
            <input type="date" ref={this.dateInputRef} />
          </label>

          <label>
            Vegan:
            <input type="checkbox" ref={this.veganCheckboxRef} />
            Lactose Free:
            <input type="checkbox" ref={this.lactoseFreeCheckboxRef} />
            Gluten Free:
            <input type="checkbox" ref={this.glutenFreeCheckboxRef} />
          </label>
          <label>
            Is available
            <input type="radio" ref={this.radioRef} />
          </label>
          <input type="file" ref={this.fileInput} />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default CreateProductForm;
