export type TCategory =
  | 'all'
  | 'electronics'
  | 'jewelery'
  | "men's clothing"
  | "women's clothing";

export const enum TFilterDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export const categories: TCategory[] = [
  'all',
  "men's clothing",
  "women's clothing",
  'jewelery',
  'electronics',
];
