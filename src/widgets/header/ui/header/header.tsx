import { useTheme } from '@/app/providers/ThemeProvider';

import { formatDate } from '@/shared/utils/formatDate';
import styles from './styles.module.css';
import ThemeButton from '@/features/theme/ui/ThemeButton/ThemeButton';

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>React News</h1>
        <p className={styles.data}> {formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;
