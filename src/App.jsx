import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
const App = () => {
  return (
    <BrowserRouter>
      <div className='flex items-center justify-evenly'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Weather />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
