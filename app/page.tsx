'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Spacer,
  Image,
  Accordion,
  AccordionItem,
} from '@nextui-org/react';
import Nav from './components/Navbar';
import Bento from './components/Bento';
import { Footer } from './components/Footer';
import NextImage from 'next/image';
import { Chip } from '@nextui-org/react';
import { SignUpButton, useAuth } from '@clerk/nextjs';

const Page = () => {
  return (
    <>
      <Nav />
      <div className='w-screen flex flex-col items-center'>
        <h1 className='text-xl sm:text-6xl max-w-2xl leading-tight mt-24 mb-6 text-center font-serif'>
          Supercharge Your Grad School Application
        </h1>
        <p className='text-md sm:text-lg text-gray-600 mb-10 text-center font-sans font-light'>
          Craft the perfect Statement of Purpose with Narrative AI
        </p>
        <SignUpButton mode='modal' redirectUrl='/onboard'>
          <Button
            size='lg'
            className='bg-teal-800 hover:bg-teal-950 text-white font-bold text-xl'
          >
            Get Started
            <p className='text-gray-300 text-sm font-light'> –– it's free</p>
          </Button>
        </SignUpButton>
        <Spacer y={20} />
        <Image
          as={NextImage}
          width={1200}
          height={1000}
          src='/images/wave.jpeg'
          alt='NextUI hero Image'
        />
        <Spacer y={40} />
        <div className='mb-6 text-center'>
          <Chip className='mb-4 text-green-900 bg-green-200'>
            Essential Features
          </Chip>
          <h1 className='text-4xl font-serif'>Discover, write, edit</h1>
          <p className='text-sm sm:text-lg text-gray-600 mb-10 text-center font-sans font-light'>
            Core features to enhance your grad school application
          </p>
          <Bento />
        </div>
      </div>

      <Spacer y={32} />

      <div className='flex flex-col items-center justify-center '>
        <Chip className='mb-4 text-green-900 bg-green-200'>Support</Chip>
        <h1 className='text-4xl font-serif'>Frequently asked questions</h1>
        <div className='flex justify-center w-full mt-10'>
          <div className='w-full max-w-3xl'>
            <Accordion
              variant='splitted'
              selectionMode='multiple'
              fullWidth={true}
            >
              <AccordionItem
                key='1'
                aria-label='Accordion 1'
                title='Does Narrative use GPT-4?'
                className='text-gray-500'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </AccordionItem>
              <AccordionItem
                key='2'
                aria-label='Accordion 2'
                title='What is a good SoP?'
                className='text-gray-500'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </AccordionItem>
              <AccordionItem
                key='3'
                aria-label='Accordion 3'
                title='Does this violate university policy'
                className='text-gray-500'
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <Spacer y={32} />

      <Footer />
    </>
  );
};

export default Page;
