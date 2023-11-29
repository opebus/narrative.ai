'use client';
import React, { useState } from 'react';
import { Button, Textarea } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@clerk/nextjs';

const fieldInfo = {
  field1: {
    label: 'Why are you doing a MS/Ph.D.?',
    placeholder: 'Why do you need it? What are your career goals?',
  },
  field2: {
    label: 'What is your research interest?',
    placeholder:
      'What is an idea in your field that turns you on intellectually? Provide 3 main focus of your research are',
  },
  field3: {
    label: 'What previous research have you done?',
    placeholder:
      'What was the problem you were trying to solve? Why was it important? What approaches did you try?',
  },
  field4: {
    label: 'What is your background? (academic and professional)',
    placeholder:
      'why interest in your major? share specific classes, accomplishments, activities (skills/qualities), work experiences, etc. Anything that shows you can succeed in grad school',
  },
  writingSample: {
    label: 'Provide a sample of your writing so we can match your style',
    placeholder:
      'I am graduating from the University of California, Berkeley with a B.A. in Computer Science...',
  },
};

const CustomTextarea = ({
  label,
  placeholder,
  value,
  setValue,
  errorMessage,
}) => {
  return (
    <Textarea
      isRequired
      label={label}
      variant='bordered'
      labelPlacement='outside'
      placeholder={placeholder}
      size='lg'
      className='max-w-3xl'
      value={value}
      onChange={(e) => setValue(e.target.value)}
      errorMessage={errorMessage}
    />
  );
};

export default function Page() {
  const router = useRouter();
  const { userId } = useAuth();

  const [fields, setFields] = useState({
    field1: { value: '', error: '' },
    field2: { value: '', error: '' },
    field3: { value: '', error: '' },
    field4: { value: '', error: '' },
    writingSample: { value: '', error: '' }, // Renamed for clarity
  });

  const setFieldValue = (field, value) => {
    setFields((prevState) => ({
      ...prevState,
      [field]: { ...prevState[field], value },
    }));
  };

  const setFieldError = (field, error) => {
    setFields((prevState) => ({
      ...prevState,
      [field]: { ...prevState[field], error },
    }));
  };

  const onFinalSubmit = async () => {
    let isValid = true;

    Object.keys(fields).forEach((field) => {
      if (!fields[field].value || fields[field].value.length < 300) {
        setFieldError(
          field,
          'Please fill out this field with at least 300 characters.'
        );
        isValid = false;
      } else {
        setFieldError(field, '');
      }
    });

    if (!isValid) {
      return;
    }

    const answers = {};
    Object.keys(fields).forEach((field, index) => {
      // Assuming the fields are in the same order as the questions
      answers[index + 1] = fields[field].value;
    });

    try {
      const response = await fetch('/api/prisma/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userId, answers }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Success:', data);

        router.push('/choose');
      } else {
        console.error('Error:', data);
      }
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-5xl mt-20 mb-10 text-center font-serif'>
        Help Narrative AI understand you better
      </h1>

      <p className='text-gray-400 mb-28'>
        Answer in 3-5 sentences and think carefully. You may edit your answers
        later
      </p>

      <div className='flex flex-col items-center space-y-10 w-full px-10 mb-20'>
        <div className='flex flex-col items-center space-y-10 w-full px-10 mb-20'>
          {Object.entries(fields).map(([key, field]) => {
            const { label, placeholder } = fieldInfo[key];
            return (
              <CustomTextarea
                key={key}
                label={label}
                placeholder={placeholder}
                value={field.value}
                setValue={(value) => setFieldValue(key, value)}
                errorMessage={field.error}
              />
            );
          })}

          <Button
            onClick={onFinalSubmit}
            className='m-20 bg-teal-800 hover:bg-teal-950 text-white font-bold px-4 py-4 rounded'
            variant='solid'
            size='lg'
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
