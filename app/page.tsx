'use client';

import type { NextPage } from 'next';
import React from 'react';
import { useRouter } from 'next/navigation'; // Adjust import for useRouter
import { Button } from '@nextui-org/react';
import Nav from './components/navbar/navbar'; // Ensure the path is correct
import Bento from './components/bento/page';

const Page: NextPage = () => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/onboard');
  };

  return (
    <>
      <Nav />
      <div className='w-screen min-h-screen p-4  flex flex-col items-center justify-center'>
        <h1 className='text-3xl sm:text-5xl font-bold text-white-800 mb-4 text-center'>
          Welcome to Narrative AI
        </h1>
        <p className='text-md sm:text-lg text-gray-600 mb-6 text-center'>
          Using AI to craft your life narrative
        </p>
        <Button
          auto
          shadow
          size='lg'
          onClick={handleGetStartedClick}
          className='bg-blue-500 hover:bg-blue-600 text-white'
        >
          Get Started
        </Button>
      </div>
      <Bento />
    </>
  );
};

export default Page;
