import React from 'react';
import logo from '../assets/logo.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TiWeatherWindy } from 'react-icons/ti';
const Login = () => {
  return (
    <section className='bg-[#0B121F] w-[100vw] h-[100vh] flex items-center justify-center'>
      <div className='  w-3/4   max-w-screen-lg   flex items-center  justify-center '>
        <div className='flex items-center justify-center w-[664px] h-[664px]  max-md:h-[400px] bg-[#202B3B]  rounded-3xl'>
          <img src={logo} alt='logo' className='w-3/4' />
        </div>
        <div className='flex flex-col items-center justify-center gap-10  w-[664px] h-[664px] max-lg:w-[550px] max-lg:h-[550px]'>
          <div className='flex flex-col items-center justify-center gap-2 '>
            <TiWeatherWindy className='text-5xl text-[#A1CEE1]' />
            <h1 className='text-7xl font-bold text-white'>Breeze</h1>
            <h3 className='text-3xl text-white'>Weater App</h3>
          </div>

          <Stack direction='row' spacing={2}>
            <Button variant='contained'>Get Started</Button>
          </Stack>
        </div>
      </div>
    </section>
  );
};

export default Login;
