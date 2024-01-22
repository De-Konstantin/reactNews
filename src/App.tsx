
import Header from './components/header/header';
import { useTheme } from './context/ThemeContext';

import Main from './pages/main/main';

function App() {
const{isDark}= useTheme()
	
	return (

		
			<div className={`app ${isDark ? 'dark' : 'light'}`}>

				<div className="container">

					<Header/>
					<Main  />
				</div>
			</div>
			
	
);

 
}

export default App;
