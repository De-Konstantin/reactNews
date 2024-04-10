import { IFilters } from '../../../../interfaces';
import { useAppDispatch } from '../../../../store';
import { useGetCategoryNewsQuery } from '../../../../entities/news/api/newsApi';
import { setFilters } from '../../../../entities/news/modal/newsSlice';
import Categories from '../../../../components/Categories/categories';
import Search from '../../../../components/search/search';
import Slider from '../../../../components/Slider/Slider';
import styles from './styles.module.css';
import { useTheme } from '@/app/providers/ThemeProvider';

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { isDark } = useTheme();
  const { data } = useGetCategoryNewsQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          dispatch(setFilters({ key: 'keywords', value: keywords }));
        }}
      />
      {data && data.categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            setSelectedCategory={(category) => {
              dispatch(setFilters({ key: 'category', value: category }));
            }}
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
    </div>
  );
};

export default NewsFilters;
