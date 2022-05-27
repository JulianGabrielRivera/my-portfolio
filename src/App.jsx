import './App.css';
import './App.jsx';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
