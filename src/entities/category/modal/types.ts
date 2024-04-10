import { CategoryType } from '@/interfaces';

export interface CategoriesApiResponse {
  categories: CategoryType[];
  description: string;
  status: string;
}

export type CategoriesType =
  | 'regional'
  | 'technology'
  | 'lifestyle'
  | 'business'
  | 'general'
  | 'programming'
  | 'science'
  | 'entertainment'
  | 'enter'
  | 'world'
  | 'sports'
  | 'finance'
  | 'academia'
  | 'politics'
  | 'health'
  | 'opinion';
