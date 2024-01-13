import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NoPage from './pages/noPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<NoPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
