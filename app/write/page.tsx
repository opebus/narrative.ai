'use client';
import React, { useState, useEffect, useRef } from 'react';
import Tiptap from '@/components/editor/Tiptap';
import { Spinner } from '@nextui-org/react';

import {
  writeIntro,
  writeResearchInterest,
  writeResearchExperience,
  writeAcademicProfessionalSummary,
  writeWhyPhD,
  writeWhyUniversity,
  rewriteInUserStyle,
  userCV,
  researchInterestAnswer,
  researchExpAnswer,
  backgroundAns,
  whyPhDAnswers,
  universityData,
  professorData,
  userStyle,
} from './prompts';
import { useAuth } from '@clerk/nextjs';

const samplePrompts = [
  writeResearchInterest(userCV, researchInterestAnswer),
  writeResearchExperience(userCV, researchExpAnswer),
  writeAcademicProfessionalSummary(userCV, backgroundAns),
  writeWhyPhD(whyPhDAnswers),
  writeWhyUniversity(universityData, professorData, researchInterestAnswer),
];

export default function Home() {
  const [responses, setResponses] = useState(new Array(6).fill('sdfsdfsdfsd'));
  const [isLoading, setIsLoading] = useState(true);
  const [label, setLabel] = useState('');
  const { userId } = useAuth();

  useEffect(() => {
    const saveSOP = async (sopText) => {
      await fetch('/api/prisma/sop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId, // Assuming `userId` is defined and holds the current user's ID
          text: sopText,
        }),
      });
    };

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
        setLabel('Cooking your SOP... Great things take time!');

        // Fetch responses for the first five prompts
        const individualResponses = await Promise.all(
          samplePrompts.slice(0, 5).map((prompt) => fetchData(prompt))
        );

        // Combine these responses
        const combinedContent = individualResponses.join('<br/><br/>');

        // Update the writeIntro prompt with the combined responses
        const introPrompt = writeIntro(userCV, combinedContent);

        setLabel('Almost done... Adding finishing touches!');
        // Fetch the response for the updated intro prompt
        const introResponse = await fetchData(introPrompt);

        // Combine the introduction with the earlier responses
        const completeSOP = [introResponse, ...individualResponses].join(
          '<br/><br/>'
        );

        // Save the complete SOP
        await saveSOP(completeSOP);

        // Set the responses state
        setResponses([introResponse, ...individualResponses]);
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
