import { formatTimeAgo } from '@/shared/utils/formatTimeAgo';
import { INews } from '../..';
import styles from './styles.module.css';
import Image from '@/shared/ui/Image/image';

interface Props {
  item: INews;
}

const NewsDetails = ({ item }: Props) => {
  return (
    <div className={styles.details}>
      <Image image={item.image} />

      <div className={styles.description}>
        <h3 className={styles.title}>{item.title}</h3>
        <p>
          {item.description} ({item.language})
          <a target="_blank" href={item.url}>
            Read more...
          </a>
        </p>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>

        <ul>
          {item.category.map((category) => {
            return (
              <li key={category}>
                <button className={styles.active}>{category}</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NewsDetails;
