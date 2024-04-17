import { INews } from '@/entities/news';
import NewsItem from '@/entities/news/ui/NewsItem/NewItem';
import withSkeleton from '@/shared/hoks/withSkeleton';
import styles from './styles.module.css';

interface Props {
  news?: INews[] | null;
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);
export default NewsListWithSkeleton;
