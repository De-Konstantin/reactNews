import BannersListWithSkeleton from '../BannersList/BannersList';
import styles from './styles.module.css';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannersListWithSkeleton banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
