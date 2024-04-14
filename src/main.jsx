import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { WeatherProvider } from './context/WeatherContext.jsx';
import { CitiesProvider } from './context/CityData.jsx';
import PinnedCitiesProvider from './context/PinnedCityContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PinnedCitiesProvider>
      <CitiesProvider>
        <WeatherProvider>
          <App />
        </WeatherProvider>
      </CitiesProvider>
    </PinnedCitiesProvider>
  </React.StrictMode>
);
