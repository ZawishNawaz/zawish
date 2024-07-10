import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Career from './pages/career';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/career' element={<Career/>} />
      </Routes>
    </Router>
     </div>
  );
}

export default App;
