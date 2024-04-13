import Main from '@/pages/main/ui/page';
import { useTheme } from '../providers/ThemeProvider';
import { Header } from '@/widgets/header/ui';

function BaseLayout() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <div className="container">
        <Header />
        <Main />
      </div>
    </div>
  );
}
export default BaseLayout;
