// import { useState } from 'react';
import { getNews, getCategories } from '../../API/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import NewsList from '../../components/NewsList/NewList';
// import Skeleton from '../../components/skeleton/skeleton';
import Pagination from '../../components/pagination/pagination';
import Categories from '../../components/Categories/categories';
import Search from '../../components/search/search';
import { useDebounce } from '../../utils/hooks/useDebounce';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFetch } from '../../utils/hooks/useFetch';
import { useFilters } from '../../utils/hooks/useFilters';
const Main = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [news, setNews] = useState([]);
  //   const [categories, setCategories] = useState([]);
  //   const [selectedCategory, setSelectedCategory] = useState('All');
  //   const [keywords, setKeywords] = useState('');
  //   const [currentPage, setCurrentPage] = useState(1);

  //   const totalPages = 10;
  //   const pageSize = 10;
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: ' ',
  });
  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories, {});

  //   const fetchNews = async (currentPage) => {
  //     try {
  //       setIsLoading(true);
  //       const response = await getNews({
  //         page_number: currentPage,
  //         page_size: PAGE_SIZE,
  //         category: selectedCategory === 'All' ? null : selectedCategory,
  //         keywords: debouncedKeywords,
  //       });
  //       setNews(response.news);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const fetchCategories = async () => {
  //     try {
  //       const response = await getCategories();
  //       setCategories(['All', ...response.categories]);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchCategories();
  //   }, []);
  //   useEffect(() => {
  //     fetchNews(currentPage);
  //   }, [currentPage, selectedCategory, debouncedKeywords]);

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
    <main className={styles.main}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFilter('keywords', keywords);
        }}
      />
      {dataCategories && dataCategories.categories ? (
        <Categories
          categories={dataCategories.categories}
          setSelectedCategory={(category) => {
            changeFilter('category', category);
          }}
          selectedCategory={filters.category}
        />
      ) : null}

      <NewsBanner isLoading={isLoading} item={data && data.news && data.news[0]} />
      {/* {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )} */}
      <Pagination
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePrevisiousPage={handlePrevisiousPage}
        totalPages={TOTAL_PAGES}
      />

      {/* {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />} */}
      <NewsList isLoading={isLoading} news={data && data.news} />
      <Pagination
        currentPage={filters.page_number}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePrevisiousPage={handlePrevisiousPage}
        totalPages={TOTAL_PAGES}
      />
    </main>
  );
};

export default Main;
