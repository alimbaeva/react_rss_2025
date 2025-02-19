import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './app.scss';
import Page404 from './page404/Page404';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useTheme } from '../components/context/useSearch';

function App() {
  const { theme } = useTheme();

  return (
    <Router>
      <main className={theme === 'light' ? 'light' : 'dark'}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}
export default App;
