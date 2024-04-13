import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import { WeatherProvider } from './context/WeatherContext.jsx';
import { CitiesProvider } from './context/CityData.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CitiesProvider>
      <WeatherProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </WeatherProvider>
    </CitiesProvider>
  </React.StrictMode>
);
