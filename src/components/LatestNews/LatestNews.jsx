import { getLatestNews } from '../../API/apiNews';
import { useFetch } from '../../utils/hooks/useFetch';
import BannersListWithSkeleton from '../BannersList/BannersList';
import styles from './styles.module.css';

const LatestNews = () => {
  const { data, isLoading } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
