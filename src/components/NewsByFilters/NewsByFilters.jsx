import { TOTAL_PAGES } from '../../constants/constants';

import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewList';
import Pagination from '../pagination/pagination';

import styles from './styles.module.css';

const NewsByFilters = ({ filters, changeFilter, isLoading, news }) => {
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

  const handlePageClick = (pageNumber) => {
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
      <Pagination
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePrevisiousPage={handlePrevisiousPage}
        totalPages={TOTAL_PAGES}
      />
      {/* {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />} */}
      <NewsList isLoading={isLoading} news={news} />
      <Pagination
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePrevisiousPage={handlePrevisiousPage}
        totalPages={TOTAL_PAGES}
      />
    </section>
  );
};

export default NewsByFilters;
