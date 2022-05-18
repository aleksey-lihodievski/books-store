import { RootState } from 'redux/reducers';
import { IProductsState } from 'redux/reducers/products';
import { TCategory } from 'typings/entities/categories';

export const selectProducts = (state: RootState): IProductsState =>
  state.products;

export const selectCategories = (state: RootState): TCategory[] =>
  state.products.categories;
