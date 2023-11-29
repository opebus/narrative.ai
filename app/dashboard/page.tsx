'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function Dashboard() {
  const [universities, setUniversities] = useState([]);
  const { userId } = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function fetchUniversities() {
      try {
        const response = await fetch(`/api/prisma/UserUniversity/${userId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setUniversities(data);
        } else {
          console.error('Data is not an array:', data);
          // Handle the case where data is not an array
        }
      } catch (error) {
        console.error('Fetch error:', error.message);
        // Handle fetch error
      }
    }

    if (userId) {
      fetchUniversities();
    }
  }, [userId]);

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-5xl mt-20 mb-10 text-center font-serif'>
        Welcome to your dashboard
      </h1>

      <p className='text-gray-400 mb-20'>Click to manage your application</p>

      <div className='gap-2 grid grid-cols-2 sm:grid-cols-4 w-full px-10 md:px-48'>
        {universities.map((uni, index) => (
          <Card
            shadow='sm'
            key={index}
            isPressable
            onPress={() => router.push(`/university/${uni.id}`)}
          >
            <CardBody className='overflow-visible p-0'>
              {/* Replace with actual image source */}
              <Image
                shadow='sm'
                radius='lg'
                width='100%'
                alt={uni.name}
                src='/images/wave.jpeg'
              />
            </CardBody>
            <CardFooter className='text-small items-left'>
              <b>{uni.name}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
