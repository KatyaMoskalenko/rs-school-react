export interface Product {
  title: string;
  date?: string;
  isVegan?: boolean;
  isGlutenFree?: boolean;
  isLactoseFree?: boolean;
  isAvailable?: boolean;
  weight: string;
  imageSrc: string;
  price: string;
  id?: number;
}
