import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import View from './components/View';
import Search from './components/Search';
import Delete from './components/Delete';
import Navbar from './components/Navbar';

function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Add />} />
    <Route path='/view' element={<View />} />
    <Route path='/delete' element={<Delete />} />
    <Route path='/search' element={<Search />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
