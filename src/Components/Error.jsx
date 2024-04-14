import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <h1 className='text-3xl mt-20 text-white'>
        404!Oops page not found.{' '}
        <NavLink to='/' className='text-blue-500 underline'>
          Go back!
        </NavLink>
      </h1>
    </div>
  );
};

export default Error;
