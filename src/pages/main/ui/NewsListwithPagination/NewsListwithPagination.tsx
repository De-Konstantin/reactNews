import { TOTAL_PAGES } from '@/shared/constants/constants';
import { NewsList } from '@/widgets/news';
import { Pagination } from '@/features/pagination';
import { IFilters } from '@/shared/interfaces';
import { INews } from '@/entities/news';
import { usePaginationNews } from '../../utils/hooks/usePaginationNews';

interface Props {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
}
const NewsListwithPagination = ({ filters, news, isLoading }: Props) => {
  const { handleNextPage, handlePrevisiousPage, handlePageClick } = usePaginationNews(filters);
  return (
    <Pagination
      top
      bottom
      currentPage={filters.page_number}
      handlePageClick={handlePageClick}
      handleNextPage={handleNextPage}
      handlePrevisiousPage={handlePrevisiousPage}
      totalPages={TOTAL_PAGES}>
      <NewsList type="item" direction="column" isLoading={isLoading} news={news} />
    </Pagination>
  );
};

export default NewsListwithPagination;
