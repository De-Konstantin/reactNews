import styles from './styles.module.css';
import NewsItem from '../../../../entities/news/ui/NewsItem/NewItem';
import withSkeleton from '../../../../shared/hoks/withSkeleton';
import { INews } from '../../../../shared/interfaces';

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
