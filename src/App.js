import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NetflixShow from './pages/NetflixShow';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/netflix-show' element={<NetflixShow />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
