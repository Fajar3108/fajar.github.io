import './assets/css/App.css';
import {Home} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './pages/Home/partials';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
