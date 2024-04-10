import React, { useEffect, useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import { CiTempHigh } from 'react-icons/ci';
import { FaWind } from 'react-icons/fa';
import { BsFillSunriseFill } from 'react-icons/bs';
import { BsFillSunsetFill } from 'react-icons/bs';
import { RiCelsiusFill } from 'react-icons/ri';
import { TbTemperatureFahrenheit } from 'react-icons/tb';

const Weather = () => {
  const [hourlyData, setHourlyData] = useState([]);
  const { weather, setCity, setUnits } = useWeather();

  if (!weather) {
    return <div>Loading...</div>;
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className='text-white text-xl w-full  h-[70vh] flex flex-col items-center justify-center'>
      <input type='text' onChange={(e) => setCity(e.target.value)} />
      {weather.map((data, i) => (
        <div
          key={i}
          className='  flex flex-col items-center justify-center w-3/4  px-5 py-5  rounded-3xl gap-10'>
          <div className='flex items-center justify-start gap-10 w-full text-center '>
            <div className='flex flex-col items-center justify-center gap-5'>
              <h1 className='text-5xl font-bold flex'>{data.name}</h1>
              <div className='flex items-center justify-center gap-2'>
                {data.main.temp}
                <div className='flex items-center justify-center'>
                  <button onClick={() => setUnits('metric')}>
                    <RiCelsiusFill />
                  </button>
                  <button onClick={() => setUnits('imperial')}>
                    <TbTemperatureFahrenheit />
                  </button>
                  {/* <span>/</span>
                  <button>
                    <TbTemperatureFahrenheit />
                  </button> */}
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <h1 className='text-gray-500'>{data.weather[0].main}</h1>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt='Weather Icon'
              />
            </div>
          </div>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 w-full px-5 py-5 bg-[#202A3A]'>
            <div className='flex items-center justify-center gap-2'>
              <CiTempHigh /> Real feel:{''}
              {data.main.feels_like}
            </div>
            <div className='flex items-center justify-center gap-2'>
              <FaWind /> Wind:{''}
              {data.wind.speed}
              {''}m/s
            </div>

            <div className='flex items-center justify-center gap-2'>
              <BsFillSunriseFill />
              Sunrise:{''}
              {formatTime(data.sys.sunrise)}am
            </div>
            <div className='flex items-center justify-center gap-2'>
              <BsFillSunsetFill /> Sunset:{''}
              {formatTime(data.sys.sunset)}pm
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Weather;
