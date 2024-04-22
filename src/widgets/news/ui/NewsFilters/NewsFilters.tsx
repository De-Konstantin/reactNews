import styles from './styles.module.css';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useAppDispatch } from '@/app/appStore';
import { setFilters } from '@/entities/news/modal/newsSlice';
import { Categories } from '@/features/caterory';
import { Search } from '@/features/search';
import { Slider } from '@/features/slider';
import { IFilters } from '@/shared/interfaces';
import { CategoriesType } from '@/entities/category';

interface Props {
  filters: IFilters;
  categories?: string[];
}
const NewsFilters = ({ filters, categories }: Props) => {
  const { isDark } = useTheme();

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          dispatch(setFilters({ key: 'keywords', value: keywords }));
        }}
      />
      {categories ? (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
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
