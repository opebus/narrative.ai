'use client';
import React, { useState } from 'react';
import { Button, Textarea } from '@nextui-org/react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

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
  const { user } = useUser();

  const [fields, setFields] = useState({
    field1: { value: '', error: '' },
    field2: { value: '', error: '' },
    field3: { value: '', error: '' },
    field4: { value: '', error: '' },
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

  const onFinalSubmit = () => {
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

    user?.update({
      unsafeMetadata: {
        onboarded: true,
      },
    });

    router.push('/choose');
  };

  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-3xl mt-20 mb-10 text-center font-serif'>
        Help Narrative AI understand you better
      </h1>

      <p className='text-gray-400 mb-10'>
        Answer in 3-5 sentences and think carefully. You may edit your answers
        later
      </p>

      <div className='flex flex-col items-center space-y-6 w-full px-10'>
        <CustomTextarea
          label='Why are you doing a MS/Ph.D.?'
          placeholder='Why do you need it? What are your career goals?'
          value={fields.field1.value}
          setValue={(value) => setFieldValue('field1', value)}
          errorMessage={fields.field1.error}
        />
        <CustomTextarea
          label='What is your research interest?'
          placeholder='What is an idea in your field that turns you on intellectually? Provide 3 main focus of your research are'
          value={fields.field2.value}
          setValue={(value) => setFieldValue('field2', value)}
          errorMessage={fields.field2.error}
        />
        <CustomTextarea
          label='What previous research have you done?'
          placeholder='What was the problem you were trying to solve? Why was it important? What approaches did you try?'
          value={fields.field3.value}
          setValue={(value) => setFieldValue('field3', value)}
          errorMessage={fields.field3.error}
        />
        <CustomTextarea
          label='What is your background? (academic and professional)'
          placeholder='why interest in your major? share specific classes, accomplishments, activities (skills/qualities), work experiences, etc. Anything that shows you can succeed in grad school'
          value={fields.field4.value}
          setValue={(value) => setFieldValue('field4', value)}
          errorMessage={fields.field4.error}
        />
        <Textarea
          label='Provide a sample of your writing so we can match your style'
          labelPlacement='outside'
          placeholder='I am graduating from the University of California, Berkeley with a B.A. in Computer Science. I am interested in pursuing a Ph.D. in Computer Science because I want to become a professor and teach computer science at the university level...'
          size='lg'
          className='max-w-3xl'
        />
        <Button
          onClick={onFinalSubmit}
          className='mt-10 mb-32 bg-teal-800 hover:bg-teal-950 text-white font-bold px-4 py-4 rounded'
          variant='solid'
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
