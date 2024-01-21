import { getLatestNews } from '../../API/apiNews';
import { NewsApiResponse } from '../../interfaces';
import { useFetch } from '../../utils/hooks/useFetch';
import BannersListWithSkeleton from '../BannersList/BannersList';
import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse,null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
