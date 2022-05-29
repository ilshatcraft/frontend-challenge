import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Favorites from './pages/Favorites';
import Main from './pages/Main';




function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/favorites" element={<Favorites/>}/>
  </Routes>
</Router>
  );
}

export default App;
