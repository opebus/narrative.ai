import React from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export default function Bento() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-12 md:px-32 xl:px-64 2xl:px-96 font-serif'>
      <Card shadow='sm' className='col-span-1'>
        <CardBody className='overflow-visible p-0'>
          <Image shadow='sm' radius='lg' width='100%' src='/images/wave.jpeg' />
        </CardBody>
        <CardFooter className='text-small flex flex-col items-start'>
          <b className='text-lg'>Full SoP letter generated</b>
          <p className='text-default-500'>
            A fully comprehensive SoP generated to get rid of the blank canvas
          </p>
        </CardFooter>
      </Card>
      <Card shadow='sm' className='col-span-1 '>
        <CardBody className='overflow-visible p-0'>
          <Image shadow='sm' radius='lg' width='100%' src='/images/wave.jpeg' />
        </CardBody>
        <CardFooter className='text-small flex flex-col items-start'>
          <b className='text-lg'>Paraphrase & Rewrite</b>
          <p className='text-default-500'>
            Paraphrase your letter any tone. Rewrite your narrative
          </p>
        </CardFooter>
      </Card>
      <Card shadow='sm' className='col-span-1'>
        <CardBody className='overflow-visible p-0'>
          <Image shadow='sm' radius='lg' width='100%' src='/images/wave.jpeg' />
        </CardBody>
        <CardFooter className='text-small flex flex-col items-start'>
          <b className='text-lg'>Professors and Students library</b>
          <p className='text-default-500'>
            A database of top researchers in the field
          </p>
        </CardFooter>
      </Card>
      <Card shadow='sm' className='col-span-1'>
        <CardBody className='overflow-visible p-0'>
          <Image shadow='sm' radius='lg' width='100%' src='/images/wave.jpeg' />
        </CardBody>
        <CardFooter className='text-small flex flex-col items-start'>
          <b className='text-lg'>University library</b>
          <p className='text-default-500'>
            A page for managing your applications
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
