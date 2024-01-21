import { forwardRef, ForwardedRef } from 'react';
import {  CategoryType } from '../../interfaces';
import styles from './styles.module.css';

interface Props {
	categories:CategoryType[];
	 setSelectedCategory:(category:CategoryType|null) => void;
	  selectedCategory:CategoryType|null
}

const Categories = forwardRef(({ categories, setSelectedCategory, selectedCategory }:Props, ref:ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.categories}>
      <button
        onClick={() => setSelectedCategory(null)}
        className={!selectedCategory ? styles.active : styles.item}
        type="button">
        All
      </button>

      {categories.map((category) => {
        return (
          <button
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? styles.active : styles.item}
            type="button"
            key={category}>
            {category}
          </button>
        );
      })}
    </div>
  );
});

Categories.displayName = 'children';

export default Categories;
