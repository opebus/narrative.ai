'use client';
import React, { useState, useEffect } from 'react';
import Tiptap from '@/components/editor/Tiptap';
import SmallTipTap from '@/components/editor/SmallTipTap';

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
  const [isGeneratingFinal, setIsGeneratingFinal] = useState(false);

  useEffect(() => {
    samplePrompts.slice(0, 5).forEach((prompt, index) => {
      fetchData(prompt, index);
    });
  }, []);

  useEffect(() => {
    // Check if initial five responses are complete
    if (
      responses
        .slice(0, 5)
        .every((response) => response && response.endsWith('.'))
    ) {
      setIsGeneratingFinal(true); // Start generating final summary
      const combinedContent = responses.slice(0, 5).join('\n\n');
      fetchData(samplePrompts[5].replace('above topics.', combinedContent), 5);
    }
    // Check if final summary is complete
    if (responses[5] && responses[5].length > 0) {
      setIsLoading(false);
    }
  }, [responses]);
  const fetchData = async (hardcodedInput, index) => {
    await fetch('api/magic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: hardcodedInput }],
      }),
    }).then(async (response) => {
      if (response.body) {
        const reader = response.body.getReader();
        let decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          // Process buffer to find word boundaries
          let boundary;
          while ((boundary = buffer.indexOf(' ')) !== -1) {
            let chunk = buffer.slice(0, boundary + 1); // Include the space in the chunk
            buffer = buffer.slice(boundary + 1);

            // Update responses for both initial prompts and the last prompt
            setResponses((prevResponses) => {
              const newResponses = [...prevResponses];
              newResponses[index] += chunk;
              return newResponses;
            });
          }
        }

        // Handle any remaining buffer
        if (buffer) {
          setResponses((prevResponses) => {
            const newResponses = [...prevResponses];
            newResponses[index] += buffer;
            return newResponses;
          });
        }
      }
    });
  };
  return (
    <div className='min-h-screen flex flex-col items-center text-md mt-20'>
      {isLoading ? (
        <>
          {responses.slice(0, 5).map((response, index) => (
            <SmallTipTap key={index} content={response} />
          ))}
          {isGeneratingFinal && <p>Generating final summary...</p>}
          <SmallTipTap content={responses[5]} />
        </>
      ) : (
        <Tiptap content={responses.join('\n\n')} />
      )}
    </div>
  );
}
