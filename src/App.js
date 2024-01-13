import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Pricing from './pages/pricing';
import NoPage from './pages/noPage';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
