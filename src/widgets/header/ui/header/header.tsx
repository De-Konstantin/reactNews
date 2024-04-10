import { useTheme } from '@/app/providers/ThemeProvider';
import { themeIcons } from '@/assets';
import { formatDate } from '@/utils/formatDate';
import styles from './styles.module.css';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>React News</h1>
        <p className={styles.data}> {formatDate(new Date())}</p>
      </div>

      <img
        src={isDark ? themeIcons.light : themeIcons.dark}
        width={36}
        alt="theme"
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
