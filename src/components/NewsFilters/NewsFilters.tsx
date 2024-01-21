import { getCategories } from '../../API/apiNews';
import { CategoriesApiResponse, IFilters } from '../../interfaces';
import { useFetch } from '../../utils/hooks/useFetch';
import Categories from '../Categories/categories';
import Search from '../search/search';
import Slider from '../Slider/Slider';
import styles from './styles.module.css';

interface Props {
	filters: IFilters;
	changeFilter:(key: string, value:string|number|null) => void;
}

const NewsFilters = ({ filters, changeFilter }:Props) => {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(getCategories);

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
