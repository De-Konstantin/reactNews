import { formatTimeAgo } from '../../../../shared/utils/formatTimeAgo';
// import withSkeleton from '../../utils/hoks/withSkeleton';
import Image from '../../../../shared/ui/Image/image';
import styles from './styles.module.css';
import { INews } from '../../modal/types';

interface Props {
  item: INews;
}

const NewsBanner = ({ item }: Props) => {
  return (
    <div className={styles.banner}>
      <Image image={item.image} />
      <h3 className={styles.title}>{item.title} </h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

// const NewsBannerWithSkeleton = withSkeleton(NewsBanner, 'banner', 1);

export default NewsBanner;
