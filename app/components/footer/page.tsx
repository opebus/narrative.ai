import React from 'react';
import { Logo } from '../navbar/logo';

export const Footer = () => {
  return (
    <div className='mt-10 py-2 px-6 flex flex-wrap justify-center bg-black'>
      <div className='py-8 flex flex-wrap justify-center gap-10'>
        <div className='flex gap-6'>
          <a href='#' className='text-white'>
            Terms of Service
          </a>
          <a href='#' className='text-white'>
            Privacy Policy
          </a>
        </div>
        <div className='flex gap-6'>
          <span className='text-white'>© Copyright 2023 Neo Inc.</span>
        </div>
      </div>
    </div>
  );
};
