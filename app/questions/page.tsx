'use client';

import React from 'react';
import Questions from '@/components/Questions';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

function Page() {
  const [response, setResponse] = useState<string>('');

  const onFinalSubmit = () => {
    console.log('Response:', Array.from(response));
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-3xl mt-20 mb-10 text-center font-serif'>
        Help Narrative AI understand you better
      </h1>
      <Questions />
      <Button
        onClick={onFinalSubmit}
        className='mt-4 bg-teal-800 hover:bg-teal-950 text-white font-bold px-4 py-4 rounded'
        variant='solid'
      >
        Submit
      </Button>
    </div>
  );
}

export default Page;
