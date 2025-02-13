import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './app.scss';
import Page404 from './page404/Page404';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
