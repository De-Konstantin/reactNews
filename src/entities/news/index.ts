import { NewsApiResponse, INews } from './modal/types';
import NewsBanner from './ui/NewsBanner/NewsBanner';
import { useGetNewsQuery, useGetLatestNewsQuery } from './api/newsApi';

export type { NewsApiResponse, INews };
export { NewsBanner };
export { useGetNewsQuery, useGetLatestNewsQuery };
