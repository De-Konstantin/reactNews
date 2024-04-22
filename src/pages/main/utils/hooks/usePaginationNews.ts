import { useAppDispatch } from '@/app/appStore';
import { setFilters } from '@/entities/news/modal/newsSlice';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import { IFilters } from '@/shared/interfaces';

export const usePaginationNews = (filters: IFilters) => {
  const dispatch = useAppDispatch();

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
  return {
    handleNextPage,
    handlePrevisiousPage,
    handlePageClick,
  };
};
