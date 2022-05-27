import './App.css';
import './App.jsx';
import Navbar from './components/Navbar';
import Portfolio from './pages/Portfolio';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <Routes>
        <Route path='/portfolio' element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
