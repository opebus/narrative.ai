'use client';
import React, { useState, useEffect, useRef } from 'react';
import Tiptap from '@/components/editor/Tiptap';
import { Spinner } from '@nextui-org/react';

const samplePrompts = [
  'Write one sentence about cats.',
  'Write one sentence about dogs.',
  'Write one sentence about dolphins.',
  'Write one sentence about giraffes.',
  'Write one sentence about elephants.',
  'Write a summary of the above topics.', // This prompt is for the combined content of the first five.
];

export default function Home() {
  const [responses, setResponses] = useState(new Array(6).fill(''));
  const [isLoading, setIsLoading] = useState(true);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const fetchData = async (hardcodedInput) => {
      const response = await fetch('api/magic', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: hardcodedInput }],
        }),
      });
      const { message } = await response.json();
      return message;
    };

    const fetchAllData = async () => {
      try {
        setIsLoading(true);
        setLabel('Initializing');
        setLabel('Generating paragraphs for your SOP');

        // Fetch responses for the first five prompts
        const individualResponses = await Promise.all(
          samplePrompts.slice(0, 5).map((prompt) => fetchData(prompt))
        );
        setResponses(individualResponses);
        setLabel('Generating an introduction');

        // Fetch the final summary
        const combinedContent = individualResponses.join('<br/><br/>');
        const finalResponse = await fetchData(
          samplePrompts[5].replace('above topics.', combinedContent)
        );
        setResponses((prev) => [finalResponse, ...prev]);
      } catch (error) {
        console.error('Error in fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col items-center text-md mt-20'>
      {isLoading ? (
        <Spinner size='lg' label={label} />
      ) : (
        <Tiptap content={responses.join('<br/><br/>')} />
      )}
    </div>
  );
}
