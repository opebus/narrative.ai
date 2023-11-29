'use client';

import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const universityData = {
  id: 'f74b5104-a06a-4d37-af2e-d319a7d932d2',
  name: 'Harvard University',
  info: "Harvard University's PhD program in Computer Science requires applicants to have completed a 4-year undergraduate degree with first class in a relevant field from a recognized institution or a master's degree. The program requires students to complete at least 16, four-unit courses or their equivalent prior to graduation. The Graduate School of Arts & Sciences (GSAS) requires all Ph.D. students to complete 16 half-courses to complete their degree. Of those 16 courses, a Ph.D. in Computer Science requires 10 letter-graded courses. The remaining 6 courses are often 300-level research courses or other undergraduate or graduate coursework beyond the 10 required courses. The GRE is not accepted for this program",
  ranking: 4,
  acceptanceRate: 0.05,
  submissionDeadline: '2022-12-15',
};

const professorData = [
  {
    id: '1472130d-5c57-415c-8731-15da4cf0e750',
    name: 'David Alvarez-Melis',
    researchFocus:
      'His research focuses on developing machine learning methods that are interpretable, robust, and fair. He is particularly interested in methods for explaining complex models and for learning with limited supervision. He has also worked on applications of these methods in healthcare and natural language processing.',
  },
  {
    id: '26bed978-a537-40b6-9d77-23fac81d59e7	',
    name: 'Nada Amin',
    researchFocus:
      'Her research interests include programming languages and type systems, verification, metaprogramming, and secure multi-party computation. She is also interested in the foundations of deep learning and the design of programming languages for machine learning.	',
  },
  {
    id: 'aec012b0-9608-436e-a514-28ed88df4ddc	',
    name: 'Demba Ba',
    researchFocus:
      'His research focuses on developing machine learning and signal processing algorithms to make sense of data in neuroscience and healthcare. He is particularly interested in understanding how the brain processes information and how to design personalized treatments for patients with neurological disorders.	',
  },
];

export default function UniversityProfile() {
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpenModal = (professor) => {
    setSelectedProfessor(professor);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProfessor(null);
  };

  const handleSopClick = () => {
    router.push(`/write/${universityData.id}`);
  };

  return (
    <div className='flex h-screen justify-center items-center bg-gray-100 p-6'>
      <div className='w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg space-y-6'>
        <div className='flex justify-between items-start'>
          <div>
            <h1 className='text-3xl font-bold mb-2'>{universityData.name}</h1>
            <p className='text-sm'>Ranking: {universityData.ranking}</p>
            <p className='text-sm'>
              Acceptance Rate: {universityData.acceptanceRate}
            </p>
            <p className='text-sm'>
              Submission Deadline: {universityData.submissionDeadline}
            </p>
            <p className='text-md mt-10'>{universityData.info}</p>
          </div>
          <Button
            onPress={handleSopClick}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            SOP
          </Button>
        </div>

        <div>
          <h2 className='text-xl font-semibold mb-4'>Professors</h2>
          <div className='grid grid-cols-2 gap-4'>
            {professorData.map((professor) => (
              <Button
                key={professor.id}
                onPress={() => handleOpenModal(professor)}
                className='bg-gray-200 hover:bg-gray-300 rounded py-2 px-4'
              >
                {professor.name}
              </Button>
            ))}
          </div>
        </div>

        <Button
          onPress={() => {}}
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
        >
          Application Portal
        </Button>

        {selectedProfessor && (
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <ModalContent>
              <ModalHeader>{selectedProfessor.name}</ModalHeader>
              <ModalBody>{selectedProfessor.researchFocus}</ModalBody>
              <ModalFooter className='flex justify-between align-center'>
                <Button color='primary' auto onPress={() => {}}>
                  Email
                </Button>
                <Button color='secondary' auto onPress={handleCloseModal}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </div>
    </div>
  );
}
