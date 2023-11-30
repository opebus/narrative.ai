'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image, Skeleton } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';

export default function Dashboard() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useAuth();
  const { user } = useUser();

  const router = useRouter();

  useEffect(() => {
    if (!user.unsafeMetadata.onboarded) {
      router.push('/onboard');
    }
  }, [user]);

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

  const getImagePath = (uniName) => {
    const name = uniName.toLowerCase();
    if (name.includes('harvard')) {
      return '/images/harvard.png';
    } else if (name.includes('berkeley')) {
      return '/images/berkeley.png';
    } else if (name.includes('california')) {
      return '/images/caltech.png';
    }
    return '/images/wave.jpeg';
  };

  const SkeletonComponent = () => (
    <div className='gap-2 grid sm:grid-cols-3 w-full px-10 md:px-32'>
      {Array(3)
        .fill('')
        .map((_) => (
          <>
            <Skeleton className='rounded-lg'>
              <div className='h-40 rounded-lg bg-default-300' />
            </Skeleton>
            <Skeleton className='rounded-lg p-4'>
              <div className='h-3 bg-default-200 rounded-lg' />
            </Skeleton>
          </>
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
                  alt={uni.name}
                  src={getImagePath(uni.name)}
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
