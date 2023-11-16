import React from 'react';
import { Textarea } from '@nextui-org/react';

export default function Questions() {
  return (
    <div className='flex flex-col items-center space-y-6 w-full px-10'>
      <Textarea
        label='Why are you doing a MS/Ph.D.?'
        labelPlacement='outside'
        placeholder='Why do you need it? What are your career goals?'
        size='lg'
        className='max-w-3xl'
      />
      <Textarea
        label='What research have you done?'
        labelPlacement='outside'
        placeholder='What was the problem you were trying to solve? Why was it important? What approaches did you try?
        '
        size='lg'
        className='max-w-3xl'
      />
      <Textarea
        label='What is your research interest?'
        labelPlacement='outside'
        placeholder='What is an idea in your field that turns you on intellectually?'
        size='lg'
        className='max-w-3xl'
      />
    </div>
  );
}
