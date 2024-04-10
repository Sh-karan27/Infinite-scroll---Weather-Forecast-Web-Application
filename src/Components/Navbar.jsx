import React from 'react';
import logo from '../assets/logo.png';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaList } from 'react-icons/fa6';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
const NavBar = () => {
  return (
    <section className='  flex items-center justify-start ml-5   h-screen '>
      <nav className=' min-h-[90vh]  bg-[#202A3A] flex-col flex items-center gap-10 px-2 py-2 rounded-lg '>
        <img src={logo} alt='' className='w-10 h-10' />
        <ul className='flex flex-col items-center  justify-center gap-20'>
          <li>
            <TiWeatherPartlySunny />
            <span className='text-sm font-bold'>Weather</span>
          </li>
          <li>
            <FaList />
            <span className='text-sm font-bold'>Cities</span>
          </li>{' '}
          <li>
            <FaMapMarkedAlt />
            <span className='text-sm font-bold'>Map</span>
          </li>{' '}
          <li>
            <IoMdSettings />
            <span className='text-sm font-bold'>Settings</span>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
