import React, { FormEvent } from 'react';
import { Product } from 'utils/interfaces';
import './AddProductForm.scss';

export interface CreateProductFormState {
  products: Product[];
  titleError: boolean;
  priceError: boolean;
  weightError: boolean;
  dateError: boolean;
  dietaryError: boolean;
  imageError: boolean;
  availabilityError: boolean;
}

export interface CreateProductFormProps {
  updateNewProductsList: (products: Product[]) => void;
}

class CreateProductForm extends React.Component<CreateProductFormProps, CreateProductFormState> {
  constructor(props: CreateProductFormProps) {
    super(props);
    this.state = {
      products: [],
      titleError: false,
      priceError: false,
      weightError: false,
      dateError: false,
      dietaryError: false,
      imageError: false,
      availabilityError: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  private selectRef = React.createRef<HTMLSelectElement>();
  private titleRef = React.createRef<HTMLInputElement>();
  private weightRef = React.createRef<HTMLInputElement>();
  private dateInputRef = React.createRef<HTMLInputElement>();
  private lactoseFreeCheckboxRef = React.createRef<HTMLInputElement>();
  private veganCheckboxRef = React.createRef<HTMLInputElement>();
  private glutenFreeCheckboxRef = React.createRef<HTMLInputElement>();
  private radioRef = React.createRef<HTMLInputElement>();
  private fileInput = React.createRef<HTMLInputElement>();

  private handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const newProduct: Product = {
      title: '',
      date: '',
      isVegan: false,
      isGlutenFree: false,
      isLactoseFree: false,
      isAvailable: false,
      weight: '',
      imageSrc: '',
      price: '',
    };
    this.titleRef.current?.value
      ? (newProduct.title = this.titleRef.current?.value) &&
        this.setState(() => {
          return { titleError: false };
        })
      : this.setState(() => {
          return { titleError: true };
        }),
      this.weightRef.current?.value
        ? (newProduct.weight = this.weightRef.current?.value) &&
          this.setState(() => {
            return { weightError: false };
          })
        : this.setState(() => {
            return { weightError: true };
          }),
      this.dateInputRef.current?.value
        ? (newProduct.date = this.dateInputRef.current?.value) &&
          this.setState(() => {
            return { dateError: false };
          })
        : this.setState(() => {
            return { dateError: true };
          }),
      this.veganCheckboxRef.current?.checked
        ? (newProduct.isVegan = this.veganCheckboxRef.current?.checked) &&
          this.setState(() => {
            return { dietaryError: false };
          })
        : this.glutenFreeCheckboxRef.current?.checked
        ? (newProduct.isGlutenFree = this.glutenFreeCheckboxRef.current?.checked) &&
          this.setState(() => {
            return { dietaryError: false };
          })
        : this.lactoseFreeCheckboxRef.current?.checked
        ? (newProduct.isLactoseFree = this.lactoseFreeCheckboxRef.current?.checked) &&
          this.setState(() => {
            return { dietaryError: false };
          })
        : this.setState(() => {
            return { dietaryError: true };
          }),
      this.radioRef.current?.checked
        ? (newProduct.isAvailable = this.radioRef.current?.checked) &&
          this.setState(() => {
            return { availabilityError: false };
          })
        : this.setState(() => {
            return { availabilityError: true };
          }),
      this.selectRef.current?.value
        ? (newProduct.price = this.selectRef.current?.value) &&
          this.setState(() => {
            return { priceError: false };
          })
        : this.setState(() => {
            return { priceError: true };
          }),
      this.fileInput.current?.value
        ? (newProduct.imageSrc = URL.createObjectURL(this.fileInput.current?.files?.[0] as Blob)) &&
          this.setState(() => {
            return { imageError: false };
          })
        : this.setState(() => {
            return { imageError: true };
          });

    setTimeout(() => this.checkForm(newProduct), 0);
  }

  private checkForm(newProduct: Product): void {
    if (Object.values(this.state).includes(true)) {
      return;
    } else {
      this.setState({ products: [...this.state.products, newProduct] });
      this.props.updateNewProductsList([...this.state.products, newProduct]);
      alert('New Product was added');
      this.clearForm();
    }
  }

  private clearForm(): void {
    this.titleRef.current && (this.titleRef.current.value = '');
    this.weightRef.current && (this.weightRef.current.value = '');
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
          {this.state.titleError && <div className="error">Enter please Title</div>}
          <label>
            Weight <input type="number" ref={this.weightRef} />
          </label>
          {this.state.weightError && <div className="error">Enter please Weight</div>}
          <label>
            Price:
            <select ref={this.selectRef}>
              <option></option>
              <option>80</option>
              <option>250</option>
            </select>
          </label>
          {this.state.priceError && <div className="error">Select please Price</div>}
          <label>
            Start date:
            <input type="date" ref={this.dateInputRef} />
          </label>
          {this.state.dateError && <div className="error">Select please Date</div>}
          <label>
            Vegan:
            <input type="checkbox" ref={this.veganCheckboxRef} />
          </label>
          <label>
            Lactose Free:
            <input type="checkbox" ref={this.lactoseFreeCheckboxRef} />
          </label>
          <label>
            Gluten Free:
            <input type="checkbox" ref={this.glutenFreeCheckboxRef} />
          </label>
          {this.state.dietaryError && <div className="error">Select please Dietary</div>}
          <label>
            Is available
            <input type="radio" ref={this.radioRef} />
          </label>
          {this.state.availabilityError && <div className="error">Check please Availability</div>}
          <input type="file" ref={this.fileInput} />
          {this.state.imageError && <div className="error">Add please Image</div>}
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default CreateProductForm;
