import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useFetcher } from 'react-router-dom';

const WeatherContext = React.createContext();

export const useWeather = () => {
  return React.useContext(WeatherContext);
};

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('Delhi');
  const [coord, setCoord] = useState('');
  const [units, setUnits] = useState('metric');
  const [hourlyData, setHourlyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&limit=5&appid=5452bf2b50ee0598ccc8c2d4278f5349&units=${units}`
        );
        const { data } = response;
        setWeather([data]);
        console.log(data);
        setCoord(data.coord);

        const hourlyuResponse = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=10&appid=5452bf2b50ee0598ccc8c2d4278f5349&units=${units}`
        );
        setHourlyData(hourlyuResponse.data.list);
        console.log(hourlyuResponse.data.list);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [city]);

  const value = {
    weather,
    city,
    setCity,
    setUnits,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
