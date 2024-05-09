import { INews } from '@/entities/news';

import withSkeleton from '@/shared/hoks/withSkeleton';
import styles from './styles.module.css';
import NewsCard from '@/entities/news/ui/NewsCard/NewsCard';
import { ReactNode } from 'react';

interface Props {
  news?: INews[] | null;
  type?: 'banner' | 'item';
  direction?: 'row' | 'column';
  viewNewsSlot?: (news: INews) => ReactNode;
}

const NewsList = ({ news, type = 'item', viewNewsSlot }: Props) => {
  return (
    <ul className={`${type === 'banner' ? styles.banners : styles.items}`}>
      {news?.map((item) => {
        return <NewsCard key={item.id} item={item} type={type} viewNewsSlot={viewNewsSlot} />;
      })}
    </ul>
  );
};
const NewsListWithSkeleton = withSkeleton(NewsList, 10);
export default NewsListWithSkeleton;
