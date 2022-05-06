import { TCategory, TFilterDirection } from 'typings/entities/categories';

export interface IFilter {
  category: TCategory;
  direction: TFilterDirection;
}
