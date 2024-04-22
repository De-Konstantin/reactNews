import { NewsFilters } from '@/widgets/news';
import styles from './styles.module.css';
import { useAppSelector } from '@/app/appStore';
import { useGetCategoryNewsQuery } from '@/entities/category/api/categoriesApi';
import NewsListwithPagination from '../NewsListwithPagination/NewsListwithPagination';
import { useGetNewsQuery } from '@/entities/news';
import { useDebounce } from '@/shared/hooks/useDebounce';

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);
  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });
  const { data } = useGetCategoryNewsQuery(null);
  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListwithPagination filters={filters} news={news} isLoading={isLoading} />
    </section>
  );
};

export default NewsByFilters;
