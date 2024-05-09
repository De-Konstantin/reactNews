import { NewsApiResponse, INews } from './modal/types';
import { useGetNewsQuery, useGetLatestNewsQuery } from './api/newsApi';
import NewsCard from './ui/NewsCard/NewsCard';
import NewsDetails from './ui/NewsDetails/NewsDetails';

export type { NewsApiResponse, INews };
export { NewsCard };
export { useGetNewsQuery, useGetLatestNewsQuery };
export { NewsDetails };
