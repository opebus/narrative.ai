'use client';

import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button, // Import the Button component
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';

export default function UniversityTable() {
  const [universities, setUniversities] = useState([]);
  const [selectedUni, setSelectedUni] = useState([]);
  const { userId } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/prisma/getUniversities');
      const data = await response.json();
      // Sort universities by ranking
      const sortedData = data.sort((a, b) => a.ranking - b.ranking);
      setUniversities(sortedData);
    };

    fetchData();
  }, []);

  const handleSelectionChange = (selectedKeysSet) => {
    const selectedKeysArray = Array.from(selectedKeysSet);

    // Filter the universities array to get the IDs of selected universities
    const selectedIds = universities
      .filter((uni) => selectedKeysArray.includes(uni.id.toString()))
      .map((uni) => uni.id);

    setSelectedUni(selectedIds);
  };

  const handleSubmit = async () => {
    if (selectedUni.length === 0) {
      alert('Please select at least one university.');
      return;
    }
    await fetch('/api/prisma/UserUniversity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        selectedUniversityIds: selectedUni,
      }),
    });

    console.log('Selected Universities submitted: ', selectedUni);
    console.log('Selected Universities: ', selectedUni);

    user?.update({
      unsafeMetadata: {
        onboarded: true,
      },
    });

    router.push('/dashboard');
  };

  return (
    <div className='flex flex-col gap-3 items-center'>
      <Table
        selectionMode='multiple'
        selectedKeys={selectedUni}
        onSelectionChange={handleSelectionChange}
        aria-label='University Ranking Table'
        // Additional styling for the table can be added here
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Ranking</TableColumn>
        </TableHeader>
        <TableBody>
          {universities.map((uni) => (
            <TableRow key={uni.id.toString()}>
              <TableCell>{uni.name}</TableCell>
              <TableCell>#{uni.ranking}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button
        onClick={handleSubmit}
        className='bg-teal-800 hover:bg-teal-950 text-white font-bold px-4 py-4 rounded'
        size='lg'
      >
        Submit
      </Button>
    </div>
  );
}
