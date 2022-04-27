import { TCategory } from 'typings/entities/categories/index';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: TCategory;
  description: string;
  image: string;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}
