import React from 'react';
import Questions from '@/components/Questions'; // Adjust path as needed

function Page() {
  return (
    <>
      <div className='flex flex-col items-center h-screen'>
        <Questions />
      </div>
    </>
  );
}

export default Page;
