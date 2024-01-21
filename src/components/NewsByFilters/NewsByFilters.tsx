import { getNews } from '../../API/apiNews';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { NewsApiResponse, ParamsType } from '../../interfaces';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { useFetch } from '../../utils/hooks/useFetch';
import { useFilters } from '../../utils/hooks/useFilters';

import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewList';

import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';

import styles from './styles.module.css';

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ' ',
  });
  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch<NewsApiResponse,ParamsType >(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };
  const handlePrevisiousPage = () => {
    if (filters.page_number > 0) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber:number) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      {/* {dataCategories && dataCategories.categories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={(category) => {
            changeFilter('category', category);
          }}
          selectedCategory={filters.category}
        />
      ) : null} */}
      {/* <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]} /> */}
      {/* {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )} */}
      {/* <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFilter('keywords', keywords);
        }}
      /> */}

      <NewsFilters filters={filters} changeFilter={changeFilter} />

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
