import React, { useEffect, useRef, useState } from 'react';
import { useCityData } from '../context/CityData';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { useWeather } from '../context/WeatherContext';

const InfiniteCitiesTable = () => {
  const { cities, hasMore, setPage } = useCityData();
  const { setCity } = useWeather();

  const loader = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });
    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <>
      <section className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className='text-3xl text-white mt-20 font-bold'>
          Cities with population more than 1000
        </h1>
        <div className='w-full flex justify-center px-10 max-sm:justify-start max-sm:overflow-scroll '>
          <table className=' table-auto text-left  mt-20 w-full'>
            <thead>
              <tr>
                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <p className='block antialiased font-sans text-sm text-blue-500 font-normal leading-none opacity-70'>
                    City
                  </p>
                </th>
                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <p className='block antialiased font-sans text-sm text-blue-500 font-normal leading-none opacity-70'>
                    Country
                  </p>
                </th>

                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <p className='block antialiased font-sans text-sm text-blue-500 font-normal leading-none opacity-70'>
                    Timezone
                  </p>
                </th>
                <th className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                  <p className='block antialiased font-sans text-sm text-blue-500 font-normal leading-none opacity-70'>
                    Coordinates(Lon/Lat)
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {cities.map((city, i) => (
                <tr key={i}>
                  <td className='p-4 border-b border-blue-gray-50 text-blue-500 underline'>
                    <NavLink to='/' onClick={() => setCity(city.name)}>
                      {' '}
                      {city.name}
                    </NavLink>
                  </td>

                  <td className='p-4 border-b border-blue-gray-50 text-gray-500'>
                    {city.cou_name_en}
                  </td>

                  <td className='p-4 border-b border-blue-gray-50 text-gray-500'>
                    {city.timezone}
                  </td>
                  <td className='p-4 border-b border-blue-gray-50 text-gray-500'>
                    {city.coordinates.lon.toFixed(2)}/
                    {city.coordinates.lat.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          ref={loader}
          style={{ height: '100px', margin: '10px' }}
          className='text-blue-500'>
          Loading more...
        </div>
      </section>
    </>
  );
};

export default InfiniteCitiesTable;
