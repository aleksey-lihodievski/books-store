import { http } from 'api';
import { TCategory } from 'typings/entities/categories/index';
import { IProduct } from 'typings/entities/products/index';
import { IFilter } from 'typings/filter/index';

export const getCategories = async (): Promise<TCategory[]> => {
  const { data } = await http.get('/products/categories');
  return data;
};

export const getAllProducts = (): Promise<IProduct[]> => {
  return http.get('/products').then((res) => res.data);
};

export const getFilteredProducts = ({
  category,
  direction,
}: IFilter): Promise<IProduct[]> => {
  return http
    .get(category !== 'all' ? `/products/category/${category}` : '/products', {
      params: { sort: direction },
    })
    .then((res) => res.data);
};

export const getProduct = (id: number): Promise<IProduct> => {
  return http.get(`/products/${id}`).then((res) => res.data);
};
