import { formatTimeAgo } from '../../utils/formatTimeAgo';
import Image from '../Image/image';
import styles from './styles.module.css';

const NewsBanner = ({ item }) => {
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

export default NewsBanner;