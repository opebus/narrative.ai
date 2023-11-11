import React from 'react';
import Github from '@/components/Github'; // Adjust path as needed
import Nav from '@/components/navbar/navbar';

function Page() {
  return (
    <>
      <Nav />
      <div className='flex justify-center items-center h-screen w-full'>
        <Github />
      </div>
    </>
  );
}

export default Page;
