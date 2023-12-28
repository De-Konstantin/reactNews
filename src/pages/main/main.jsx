import { useEffect, useState } from 'react';
import { getNews } from '../../API/apiNews';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import NewsList from '../../components/NewsList/NewList';
const Main = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);
  console.log(news);
  return (
    <main className={styles.main}>
      {news.length > 0 ? <NewsBanner item={news[0]} /> : null}
      <NewsList news={news} />
    </main>
  );
};

export default Main;
