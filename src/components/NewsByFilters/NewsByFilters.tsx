import { TOTAL_PAGES } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { setFilters } from '../../store/slices/newsSlice';
import { useDebounce } from '../../utils/hooks/useDebounce';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewList';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import styles from './styles.module.css';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.news.filters);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number + 1 }));
    }
  };
  const handlePrevisiousPage = () => {
    if (filters.page_number > 0) {
      dispatch(setFilters({ key: 'page_number', value: filters.page_number - 1 }));
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <PaginationWrapper
        top
        bottom
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePrevisiousPage={handlePrevisiousPage}
        totalPages={TOTAL_PAGES}>
        <NewsList isLoading={isLoading} news={data && data.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
