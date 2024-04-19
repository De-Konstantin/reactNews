import { NewsApiResponse, INews } from './modal/types';
import { useGetNewsQuery, useGetLatestNewsQuery } from './api/newsApi';
import NewsCard from './ui/NewsCard/NewsCard';

export type { NewsApiResponse, INews };
export { NewsCard };
export { useGetNewsQuery, useGetLatestNewsQuery };
