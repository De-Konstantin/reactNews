import { useTheme } from '../../context/ThemeContext';
import { IFilters } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { useGetCategoryNewsQuery } from '../../store/services/newsApi';
import { setFilters } from '../../store/slices/newsSlice';
import Categories from '../Categories/categories';
import Search from '../search/search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

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
