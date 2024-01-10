import { getCategories } from '../../API/apiNews';
import { useFetch } from '../../utils/hooks/useFetch';
import Categories from '../Categories/categories';
import Search from '../search/search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dataCategories } = useFetch(getCategories, {});

  return (
    <div className={styles.filters}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => {
          changeFilter('keywords', keywords);
        }}
      />
      {dataCategories && dataCategories.categories ? (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            setSelectedCategory={(category) => {
              changeFilter('category', category);
            }}
            selectedCategory={filters.category}
          />
        </Slider>
      ) : null}
    </div>
  );
};

export default NewsFilters;
