import BannersListWithSkeleton from '@/components/widgets/news/ui/BannersList/BannersList';
import { useGetLatestNewsQuery } from '@/entities/news/api/newsApi';
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
