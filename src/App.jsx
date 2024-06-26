import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import Cities from './Components/Cities';
import PinnedCity from './Components/PinnedCity';
import Error from './Components/Error';
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Weather />} />
        <Route path='/cities' element={<Cities />} />
        <Route path='/pin' element={<PinnedCity />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
