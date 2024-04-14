import React from 'react';
import { usePinnedCity } from '../context/PinnedCityContext';
import { RiCelsiusFill } from 'react-icons/ri';
import { TbTemperatureFahrenheit } from 'react-icons/tb';
import { useWeather } from '../context/WeatherContext';
import { CiTempHigh } from 'react-icons/ci';
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { BsCloudMoonFill } from 'react-icons/bs';
import { BsFillSunriseFill } from 'react-icons/bs';

const PinnedCity = () => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  };
  const { pinned, setPinned } = usePinnedCity();
  const { units } = useWeather();
  console.log(pinned);
  return (
    <section className='w-full h-full flex  items-center justify-center '>
      <div className='w-3/4 flex flex-col items-center justify-center gap-10 mt-20'>
        <h1 className='text-5xl font-bold text-white'>Pinned Cities</h1>
        <div className='grid grid-cols-3 gap-20'>
          {pinned.map((city, index) => (
            <div
              key={index}
              className=' bg-[#202A3A] flex flex-col items-center justify-center gap-2 w-full px-2 py-2 rounded-xl'>
              <h1 className='text-3xl font-bold flex text-white'>
                {city.name}
                <span className='text-sm text-blue-500'>
                  {' '}
                  {city.sys.country}
                </span>
              </h1>
              <div className='flex  items-center justify-center gap-2'>
                <span className='text-blue-500'>{city.main.temp}</span>
                <div className='flex items-center justify-center'>
                  {' '}
                  <RiCelsiusFill className='text-white' />
                </div>
              </div>
              <div className='flex  items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                  {' '}
                  <h1 className='text-blue-500  text-lg'>
                    Weather:{' '}
                    <span className='text-white'>
                      {city.weather[0].description}
                    </span>
                  </h1>
                </div>

                <img
                  src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
                  alt='Weather Icon'
                />
              </div>
              <div className='w-full flex flex-col items-start justify-center gap-3'>
                <div className='flex items-center justify-center gap-2 text-gray-500 text-lg'>
                  <CiTempHigh className='text-blue-500' /> Real feel:{''}
                  {city.main.feels_like}
                </div>
                <div className='flex items-center justify-center gap-2 text-gray-500 text-lg'>
                  <WiHumidity className='text-blue-500' />
                  Humidity:{''}
                  {city.main.humidity}%
                </div>
                <div className='flex items-center justify-center gap-2 text-gray-500  text-lg'>
                  <FaWind className='text-blue-500' /> Wind:{''}
                  {city.wind.speed}
                  {units === 'metric' ? <span>(m/s)</span> : <span>(mph)</span>}
                </div>

                <div className='flex items-center justify-center gap-2 text-gray-500  text-lg'>
                  <BsFillSunriseFill className='text-blue-500' />
                  Sunrise:{''}
                  {formatTime(city.sys.sunrise)}am
                </div>
                <div className='flex items-center justify-center gap-2 text-gray-500  text-lg'>
                  <BsCloudMoonFill className='text-blue-500' /> Sunset:{''}
                  {formatTime(city.sys.sunset)}pm
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinnedCity;
