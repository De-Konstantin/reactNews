import styles from './styles.module.css';

interface Props {
	keywords:string;
	setKeywords:(keywords:string) => void;
}

const Search = ({ keywords, setKeywords }:Props) => {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        placeholder="Search news"
      />
    </div>
  );
};

export default Search;
