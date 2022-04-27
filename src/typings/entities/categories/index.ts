export type TCategory =
  | 'all'
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";

export type TFilterDirection = 'asc' | 'desc';

export const categories: TCategory[] = [
  'all',
  "men's clothing",
  "women's clothing",
  'jewelery',
  'electronics',
];
