import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import Cities from './Components/Cities';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/cities' element={<Cities />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
