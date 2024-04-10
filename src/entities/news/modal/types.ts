import { CategoriesType } from '@/entities/category';
import { CategoryType } from '@/interfaces';

export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string | number | null;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}
