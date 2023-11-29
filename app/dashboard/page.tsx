'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

const universitiesData = [
  {
    id: 'f74b5104-a06a-4d37-af2e-d319a7d932d2',
    name: 'Harvard University',
  },
  {
    id: '2cc848d2-a7d2-4809-bb04-32f1e6b312ce',
    name: 'Stanford University',
  },
  {
    id: '30b65fff-3f1a-4ce8-9c45-472d3d1354b4',
    name: 'UC Berkeley',
  },
  {
    id: '7489dbfb-2b55-4719-b9d3-374dcd54f2c4',
    name: 'Massachusetts Institute of Technology',
  },
  {
    id: '14102be1-26e7-48ea-8f37-df1f863abb5d',
    name: 'California Institute of Technology',
  },
];

export default function Dashboard() {
  const [universities, setUniversities] = useState([]);
  const { userId } = useAuth();
  const router = useRouter();

  //useEffect(() => {
  //  async function fetchUniversities() {
  //    try {
  //      const response = await fetch(`/api/prisma/UserUniversity/${userId}`);
  //      if (!response.ok) {
  //        throw new Error('Network response was not ok');
  //      }

  //      const data = await response.json();
  //      if (Array.isArray(data)) {
  //        setUniversities(data);
  //      } else {
  //        console.error('Data is not an array:', data);
  //        // Handle the case where data is not an array
  //      }
  //    } catch (error) {
  //      console.error('Fetch error:', error.message);
  //      // Handle fetch error
  //    }
  //  }

  //  if (userId) {
  //    fetchUniversities();
  //  }
  //}, [userId]);

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-5xl mt-20 mb-10 text-center font-serif'>
        Welcome to your dashboard
      </h1>

      <p className='text-gray-400 mb-20'>Click to manage your application</p>

      <div className='gap-2 grid grid-cols-2 sm:grid-cols-4 w-full px-10 md:px-48'>
        {universitiesData.map((uni, index) => (
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
