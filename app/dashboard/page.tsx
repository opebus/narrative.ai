'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image, Skeleton } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

export default function Dashboard() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
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
          setLoading(false);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Fetch error:', error.message);
      }
    }

    if (userId) {
      fetchUniversities();
    }
  }, [userId]);

  const SkeletonComponent = () => (
    <div className='gap-2 grid sm:grid-cols-3 w-full px-10 md:px-32'>
      {Array(3)
        .fill()
        .map((_, index) => (
          <Card key={index} shadow='sm' className='mb-10'>
            <Skeleton className='rounded-lg'>
              <div className='h-40 rounded-lg bg-default-300'></div>{' '}
              {/* Mimic image size */}
            </Skeleton>
            <Skeleton className='rounded-lg p-4'>
              <div className='h-5 bg-default-200 rounded-lg mb-2'></div>{' '}
              {/* Mimic title size */}
              <div className='h-3 bg-default-200 rounded-lg'></div>{' '}
              {/* Mimic subtitle or footer */}
            </Skeleton>
          </Card>
        ))}
    </div>
  );

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-5xl mt-20 mb-10 text-center font-serif'>
        Welcome to your dashboard
      </h1>

      <p className='text-gray-400 mb-20'>
        Manage all your applications in one place
      </p>

      {loading ? (
        <SkeletonComponent />
      ) : (
        <div className='gap-2 grid sm:grid-cols-3 w-full px-10 md:px-32'>
          {universities.map((uni, index) => (
            <Card
              shadow='sm'
              key={index}
              isPressable
              onPress={() => router.push(`/university/${uni.id}`)}
            >
              <CardBody className='overflow-visible p-0'>
                <Image
                  shadow='sm'
                  radius='lg'
                  width='100%'
                  alt={uni.name}
                  src='/images/wave.jpeg' // Replace with actual image source
                />
              </CardBody>
              <CardFooter className='text-small items-left'>
                <b>{uni.name}</b>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
