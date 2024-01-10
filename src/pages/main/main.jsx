import styles from './styles.module.css';

import LatestNews from '../../components/LatestNews/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';
const Main = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const [news, setNews] = useState([]);
  //   const [categories, setCategories] = useState([]);
  //   const [selectedCategory, setSelectedCategory] = useState('All');
  //   const [keywords, setKeywords] = useState('');
  //   const [currentPage, setCurrentPage] = useState(1);

  //   const totalPages = 10;
  //   const pageSize = 10;

  //   const { data: dataCategories } = useFetch(getCategories, {});

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

  //   const handleNextPage = () => {
  //     if (filters.page_number < TOTAL_PAGES) {
  //       changeFilter('page_number', filters.page_number + 1);
  //     }
  //   };
  //   const handlePrevisiousPage = () => {
  //     if (filters.page_number > 0) {
  //       changeFilter('page_number', filters.page_number - 1);
  //     }
  //   };

  //   const handlePageClick = (pageNumber) => {
  //     changeFilter('page_number', pageNumber);
  //   };

  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters
      //   isLoading={isLoading}
      //   news={data?.news}
      //   filters={filters}
      //   changeFilter={changeFilter}
      />
    </main>
  );
};

export default Main;
