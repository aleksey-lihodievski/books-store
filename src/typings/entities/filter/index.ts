import { TCategory, TFilterDirection } from 'typings/entities/categories/index';

export interface IFilter {
  category: TCategory;
  direction: TFilterDirection;
}
