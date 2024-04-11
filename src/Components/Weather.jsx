import React, { useEffect, useState } from 'react';
import { useWeather } from '../context/WeatherContext';
import { CiTempHigh } from 'react-icons/ci';
import { FaWind } from 'react-icons/fa';
import { BsFillSunriseFill } from 'react-icons/bs';
import { BsCloudMoonFill } from 'react-icons/bs';
import { RiCelsiusFill } from 'react-icons/ri';
import { TbTemperatureFahrenheit } from 'react-icons/tb';
import { FaRegHourglass } from 'react-icons/fa6';
import HightTemp from '../assets/HighTemp.png';
import LowTemp from '../assets/LowTemp.png';
import MediummTemp from '../assets/MediumTemp.png';

const Weather = () => {
  const { weather, setCity, units, setUnits, hourlyData } = useWeather();

  if (!weather) {
    return <div>Loading...</div>;
  }

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getWeatherIcon = (temp, units) => {
    const tempInCelsius = units === 'imperial' ? ((temp - 32) * 5) / 9 : temp;

    if (tempInCelsius > 35) {
      return HightTemp;
    } else if (tempInCelsius < 5) {
      return LowTemp;
    } else {
      return MediummTemp;
    }
  };
  const temperature = weather.length > 0 ? weather[0].main.temp : null;
  const temperatureIcon = getWeatherIcon(temperature, units);
  return (
    <section className='text-white text-xl w-full  h-full flex flex-col  items-center justify-center gap-5 min-h-[75vh]'>
      <div className='flex items-center justify-center px-5 py-5'>
        {' '}
        <input
          placeholder='Enter city name'
          type='text'
          className='w-[400px]  px-1 py-1 '
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className='flex items-start justify-center gap-10 w-full h-full max-sm:flex-col max-sm:items-center'>
        {weather.map((data, i) => (
          <div
            key={i}
            className='  flex flex-col items-center justify-center gap-5  bg-[#202A3A]  py-5 px-5 rounded-xl'>
            <img
              src={temperatureIcon} // Use the temperature icon determined outside of the loop
              alt='Temperature Icon'
              className='w-[150px]'
            />
            <div className='flex flex-col items-center justify-center gap-5 w-full text-center '>
              <div className='flex   items-start justify-center gap-5 w-full'>
                <div className='flex flex-col items-center justify-center'>
                  <h1 className='text-5xl font-bold flex text-white'>
                    {data.name}
                  </h1>
                  <div className='flex  items-center justify-center gap-2'>
                    <span className='text-blue-500'>{data.main.temp}</span>
                    <div className='flex items-center justify-center'>
                      {' '}
                      <RiCelsiusFill
                        onClick={() => setUnits('metric')}
                        className={`${
                          units == 'metric' ? 'text-blue-500' : ''
                        } cursor-pointer`}
                      />
                      /
                      <TbTemperatureFahrenheit
                        onClick={() => setUnits('imperial')}
                        className={`${
                          units == 'imperial' ? 'text-blue-500' : ''
                        } cursor-pointer`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex  items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                  {' '}
                  <h1 className='text-blue-500  text-lg'>
                    Weather:{' '}
                    <span className='text-white'>
                      {data.weather[0].description}
                    </span>
                  </h1>
                </div>

                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt='Weather Icon'
                />
              </div>
            </div>

            <div className='w-full flex flex-col items-start justify-center gap-5'>
              <div className='flex items-center justify-center gap-2 text-gray-500 text-lg'>
                <CiTempHigh className='text-blue-500' /> Real feel:{''}
                {data.main.feels_like}
              </div>
              <div className='flex items-center justify-center gap-2 text-gray-500  text-lg'>
                <FaWind className='text-blue-500' /> Wind:{''}
                {data.wind.speed}
                {units === 'metric' ? <span>(m/s)</span> : <span>(mph)</span>}
              </div>

              <div className='flex items-center justify-center gap-2 text-gray-500  text-lg'>
                <BsFillSunriseFill className='text-blue-500' />
                Sunrise:{''}
                {formatTime(data.sys.sunrise)}am
              </div>
              <div className='flex items-center justify-center gap-2 text-gray-500  text-lg'>
                <BsCloudMoonFill className='text-blue-500' /> Sunset:{''}
                {formatTime(data.sys.sunset)}pm
              </div>
            </div>
          </div>
        ))}
        <div className=' flex flex-col items-center justify-center gap-2  bg-[#202A3A]  py-5 px-5 rounded-xl '>
          <h1 className='flex items-center justify-center gap-1 text-blue-500 font-bold'>
            Hourly Forcast <FaRegHourglass />
          </h1>
          <div className='flex items-center justify-start  gap-10 w-[17rem]  '>
            <h1 className='text-sm'>Date/Time</h1>
            <h1 className='text-sm'>Weather</h1>
            <h1 className='text-sm'>Temp</h1>
          </div>
          {hourlyData.map((data, i) => (
            <div
              key={i}
              className='flex items-center justify-start  gap-10  w-[17rem] '>
              <h1 className='text-sm text-gray-500 '>{data.dt_txt}</h1>

              <div className='text-sm flex  items-center justify-center'>
                <h1 className='text-gray-500'> {data.weather[0].main}</h1>
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt=''
                  className='w-10'
                />
              </div>
              <h3 className=' text-sm flex items-center justify-center text-blue-500'>
                {data.main.temp}
                {units === 'metric' ? (
                  <RiCelsiusFill className='text-gray-500' />
                ) : (
                  <TbTemperatureFahrenheit className='text-gray-500' />
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Weather;
