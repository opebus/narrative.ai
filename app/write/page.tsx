'use client';

import React, { useState, useEffect } from 'react';
import Tiptap from '@/components/editor/Tiptap'; // Adjust the import path as needed

export default function Home() {
  const [openAIResponse, setOpenAIResponse] = useState<string>('');

  useEffect(() => {
    const hardcodedInput = 'Write a short and simple poem about life';

    const fetchData = async () => {
      await fetch('api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: hardcodedInput }],
        }),
      }).then(async (response: any) => {
        const reader = response.body?.getReader();
        setOpenAIResponse('');
        while (true) {
          const { done, value } = await reader?.read();
          if (done) break;
          const currentChunk = new TextDecoder().decode(value);
          setOpenAIResponse((prev) => prev + currentChunk);
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center text-md mt-20'>
      <Tiptap content={openAIResponse} />
    </div>
  );
}
