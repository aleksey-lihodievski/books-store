import { RootState } from 'redux/reducers';

export const selectProducts = (state: RootState) => state.products;

export const selectCategories = (state: RootState) => state.products.categories;
