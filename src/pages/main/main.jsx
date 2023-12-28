import { useEffect, useState } from 'react';
import { getNews } from '../../API/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import NewsList from '../../components/NewsList/NewList';
import Skeleton from '../../components/skeleton/skeleton';
const Main = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const response = await getNews();
        setNews(response.news);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  console.log(news);
  return (
    <main className={styles.main}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}
      {!isLoading ? <NewsList news={news} /> : <Skeleton type={'item'} count={10} />}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
