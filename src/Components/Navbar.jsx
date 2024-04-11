import React from 'react';
import logo from '../assets/logo.png';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaList } from 'react-icons/fa6';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <section className='  flex items-center justify-center w-full mt-10  '>
      <nav className='    bg-[#202A3A]  flex items-center justify-center gap-5 px-5 py-2 rounded-lg '>
        <img src={logo} alt='' className='w-10 h-10' />

        <div className='flex items-center justify-center gap-10'>
          {[
            [
              { name: 'Weather', path: '/', icon: <TiWeatherPartlySunny /> },
              { name: 'Cities', path: '/cities', icon: <FaList /> },
              { name: 'Map', path: '/map', icon: <FaMapMarkedAlt /> },
            ].map((nav, i) => (
              <NavLink
                className='flex items-center justify-center text-white gap-1 '
                key={i}
                to={nav.path}>
                {nav.name}
                {nav.icon}
              </NavLink>
            )),
          ]}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
