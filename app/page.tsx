'use client';

import {
  Button,
  Spacer,
  Image,
  Accordion,
  AccordionItem,
  Chip,
} from '@nextui-org/react';
import Bento from './components/Bento';
import { Footer } from './components/Footer';
import NextImage from 'next/image';
import { SignUpButton } from '@clerk/nextjs';

const Page = () => {
  return (
    <>
      <div className='w-screen flex flex-col items-center'>
        <h1 className='text-xl sm:text-6xl max-w-2xl leading-tight mt-24 mb-6 text-center font-serif'>
          Supercharge Your Grad School Application
        </h1>
        <p className='text-md sm:text-lg text-gray-600 mb-10 text-center font-sans font-light'>
          Craft the perfect Statement of Purpose with Narrative AI ✨
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
                Yes, Narrative extensively utilizes GPT-4. GPT-4 offers advanced
                language understanding and generation capabilities, making it
                ideal for creating engaging and coherent narratives. Its ability
                to process and generate human-like text allows for a wide range
                of applications in content creation, customer service, and more.
              </AccordionItem>
              <AccordionItem
                key='2'
                aria-label='Accordion 2'
                title='What is a good SoP?'
                className='text-gray-500'
              >
                A good Statement of Purpose (SoP) effectively communicates your
                goals, experiences, and motivations for pursuing a particular
                academic or professional path. It should be well-structured,
                concise, and personalized, reflecting your unique journey and
                aspirations. A compelling SoP not only outlines your academic
                and professional achievements but also demonstrates your
                potential contribution to the program and how it aligns with
                your career objectives
              </AccordionItem>
              <AccordionItem
                key='3'
                aria-label='Accordion 3'
                title='Does this violate university policy'
                className='text-gray-500'
              >
                Using AI tools like GPT-4 for educational purposes does not
                inherently violate university policies. However, it's crucial to
                adhere to academic integrity guidelines. This means using AI as
                a supplementary tool for learning and idea generation, rather
                than for plagiarism or misrepresentation of your own abilities.
                Always consult your university's specific policies and
                guidelines to ensure compliance
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
