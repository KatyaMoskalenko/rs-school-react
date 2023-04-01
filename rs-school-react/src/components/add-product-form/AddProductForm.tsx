import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';
import { Product } from 'utils/interfaces';
import './AddProductForm.scss';

export interface CreateProductFormState {
  products: Product[];
}

export interface CreateProductFormProps {
  updateNewProductsList: (products: Product[]) => void;
}

export default function CreateProductForm({
  updateNewProductsList,
}: CreateProductFormProps): ReturnType<React.FC> {
  const [state, setState] = useState<CreateProductFormState>({ products: [] });
  const [dietary, setDietary] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm();

  useEffect(() => {
    reset({
      data: '',
    });
  }, [reset]);

  function getDietaryValues(): void {
    const dietaryValues = getValues(['isVegan', 'isGlutenFree', 'isGlutenFree']);
    if (dietaryValues.includes(true)) {
      setDietary(true);
    } else {
      setDietary(false);
    }
  }

  const addProduct = (data: FieldValues): void => {
    const newProduct: Product = {
      title: data.title,
      date: data.date,
      isVegan: data.isVegan,
      isGlutenFree: data.isGlutenFree,
      isLactoseFree: data.isLactoseFree,
      isAvailable: data.isAvailable,
      weight: data.weight,
      imageSrc: URL.createObjectURL(new Blob(data.imageSrc)),
      price: data.price,
    };
    setState({ products: [...state.products, newProduct] });
    updateNewProductsList([...state.products, newProduct]);
    alert('New Product was added');
    reset();
    setDietary(true);
  };

  async function onSubmit(data: FieldValues): Promise<void> {
    await getDietaryValues();
    setTimeout(() => dietary && addProduct(data));
  }

  return (
    <>
      <form onSubmit={handleSubmit((data) => onSubmit(data))} className="form">
        <label>
          Title <input type="text" {...register('title', { required: true })} />
        </label>
        {errors.title && <div className="error">Enter please Title</div>}
        <label>
          Weight <input type="number" {...register('weight', { required: true })} />
        </label>
        {errors.weight && <div className="error">Enter please Weight</div>}
        <label>
          Price:
          <select {...register('price', { required: true })}>
            <option></option>
            <option>80</option>
            <option>250</option>
          </select>
        </label>
        {errors.price && <div className="error">Select please Price</div>}
        <label>
          Start date:
          <input type="date" {...register('date', { required: true })} />
        </label>
        {errors.date && <div className="error">Select please Date</div>}
        <label>
          Vegan:
          <input type="checkbox" {...register('isVegan')} />
        </label>
        <label>
          Lactose Free:
          <input type="checkbox" {...register('isLactoseFree')} />
        </label>
        <label>
          Gluten Free:
          <input type="checkbox" {...register('isGlutenFree')} />
        </label>
        {dietary === false && <div className="error">Select please Dietary</div>}
        <label>
          Is available
          <input type="radio" {...register('isAvailable', { required: true })} />
        </label>
        {errors.isAvailable && <div className="error">Check please Availability</div>}
        <input type="file" {...register('imageSrc', { required: true })} />
        {errors.imageSrc && <div className="error">Add please Image</div>}
        <button
          type="submit"
          onClick={() => {
            getDietaryValues();
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
