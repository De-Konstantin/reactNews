import BannersListWithSkeleton from '@/components/BannersList/BannersList';
import { useGetLatestNewsQuery } from '@/store/services/newsApi';
import styles from './styles.module.css';
const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
