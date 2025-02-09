import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import './app.scss';
import Page404 from './page404/Page404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}
export default App;
