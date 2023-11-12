import React from 'react';
import { Textarea } from '@nextui-org/react';

export default function Questions() {
  return (
    <div className='flex flex-col items-center space-y-6 w-full px-10'>
      <Textarea
        label='What is ____?'
        labelPlacement='outside'
        placeholder='Answer in 3-5 sentences'
        size='lg'
        className='max-w-3xl'
      />
      <Textarea
        label='What is ____?'
        labelPlacement='outside'
        placeholder='Answer in 3-5 sentences'
        size='lg'
        className='max-w-3xl'
      />
      <Textarea
        label='What is ____?'
        labelPlacement='outside'
        placeholder='Answer in 3-5 sentences'
        size='lg'
        className='max-w-3xl'
      />
    </div>
  );
}
