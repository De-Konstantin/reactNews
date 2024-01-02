import { useEffect, useState } from 'react';
import { getNews } from '../../API/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import NewsList from '../../components/NewsList/NewList';
import Skeleton from '../../components/skeleton/skeleton';
import Pagination from '../../components/pagination/pagination';

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;
  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews(currentPage, pageSize);
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevisiousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      console.log(currentPage);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      <Pagination
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePrevisiousPage={handlePrevisiousPage}
        totalPages={totalPages}
      />

      {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />}
      {/* <NewsList news={news} /> */}
      <Pagination
        currentPage={currentPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
        handlePrevisiousPage={handlePrevisiousPage}
        totalPages={totalPages}
      />
    </main>
  );
};

export default Main;
