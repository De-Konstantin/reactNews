import styles from './styles.module.css';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useAppDispatch } from '@/app/appStore';
import { useGetCategoryNewsQuery } from '@/entities/category/api/categoriesApi';
import { setFilters } from '@/entities/news/modal/newsSlice';
import { Categories } from '@/features/caterory';
import { Search } from '@/features/search';
import { Slider } from '@/features/slider';
import { IFilters } from '@/shared/interfaces';

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
