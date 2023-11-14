'use client';

import { useRef, useState } from 'react';
import { Select, SelectItem, Chip, Input, Button } from '@nextui-org/react';
import { GitHubRepo } from '@/types/repo';
import { Progress } from '@nextui-org/react';
import Nav from '@/components/Navbar';

export default function Onboard() {
  const [onboardingCurrentStep, setOnboardingCurrentStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRepoNames, setSelectedRepoNames] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<any>(null);

  const handleRepoSelectionSubmit = async () => {
    setIsLoading(true);
    console.log('Selected Repos:', Array.from(selectedRepoNames));
    setOnboardingCurrentStep(1);
    setIsLoading(false);
  };

  const handleResumeSelectionSubmit = async () => {
    setIsLoading(true);
    console.log('Selected files:', Array.from(selectedFiles));
    setOnboardingCurrentStep(2);
    setIsLoading(false);
  };

  const stepComponents: any = {
    0: {
      title: 'GitHub Information',
      caption:
        'Provide us with your GitHub information to extract information about your projects',
      setData: setSelectedRepoNames,
      onBoardSubmit: handleRepoSelectionSubmit,
    },
    1: {
      title: 'Resume Information',
      caption:
        'Provide us with your GitHub information to extract information about your projects',
      setData: setSelectedFiles,
      onBoardSubmit: handleResumeSelectionSubmit,
    },
  };

  return (
    <div className='flex flex-col h-screen'>
      <Nav />
      <Progress
        size='sm'
        aria-label='Loading...'
        value={
          (onboardingCurrentStep * 100) / Object.keys(stepComponents).length
        }
        className='max-w-md mx-auto my-20'
      />
      <div className='flex max-w-lg mx-auto h-full'>
        <div className='flex flex-col justify-center items-center'>
          <OnboardTitle
            title={stepComponents[onboardingCurrentStep].title}
            caption={stepComponents[onboardingCurrentStep].caption}
          />
          <div className='flex flex-col gap-12 mt-10 w-full flex-grow'>
            {onboardingCurrentStep == 0 ? (
              <GitHub setData={stepComponents[onboardingCurrentStep].setData} />
            ) : (
              <Resume setData={stepComponents[onboardingCurrentStep].setData} />
            )}
          </div>
          <Button
            onClick={stepComponents[onboardingCurrentStep].onBoardSubmit}
            className='mb-20 w-full bg-teal-800 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded'
            variant='solid'
            isLoading={isLoading}
          >
            {onboardingCurrentStep != Object.keys(stepComponents).length - 1
              ? 'Next'
              : 'Finish'}
          </Button>
        </div>
      </div>
    </div>
  );
}

const OnboardTitle = ({
  title,
  caption,
}: {
  title: string;
  caption: string;
}) => {
  return (
    <>
      <h1 className='text-2xl font-bold'>{title}</h1>
      <p className='text-md text-center mt-4'>{caption}</p>
    </>
  );
};

const GitHub = ({ setData }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [username, setUsername] = useState<string>('');
  const [isRepoFetched, setIsRepoFetched] = useState(false);

  const getRepos = async (username: string) => {
    setIsRepoFetched(false);
    if (!username) {
      return;
    }
    try {
      const response = await fetch(`/api/github/repos?username=${username}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const repos: GitHubRepo[] = await response.json();
      setRepos(repos);
      setIsRepoFetched(true);
    } catch (error) {
      console.error('Failed to fetch repos:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getRepos(username);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          value={username}
          label='Username'
          className='w-full rounded-md focus:border-blue-500'
          defaultValue='noobcoder69'
          variant='bordered'
          onValueChange={(value) => {
            setUsername(value);
            setIsRepoFetched(false);
          }}
        />
      </form>
      <Select
        isMultiline
        size='lg'
        radius='md'
        label='Your Repositories'
        placeholder='Select repositories'
        variant='bordered'
        selectionMode='multiple'
        className='w-full'
        items={repos}
        isDisabled={!isRepoFetched}
        onSelectionChange={setData}
        renderValue={(selectedItems) => (
          <div className='flex flex-wrap gap-2'>
            {selectedItems.map((repoName) => (
              <Chip
                key={repoName.key}
                className='bg-teal-800 hover:bg-teal-950 text-white'
              >
                {repoName.textValue}
              </Chip>
            ))}
          </div>
        )}
      >
        {repos.map((repo) => (
          <SelectItem key={repo.name} textValue={repo.name}>
            {repo.name}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

const Resume = ({ setData }) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  function handleChange(e: any) {
    e.preventDefault();
    console.log('File has been added');
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files);
      for (let i = 0; i < e.target.files['length']; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
      setData(files);
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files['length']; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = '';
    inputRef.current.click();
  }

  return (
    <>
      <form
        className={`${
          dragActive ? 'bg-teal-400' : 'bg-teal-100'
        }  p-4 rounded-lg  min-h-[10rem] flex flex-col items-center justify-center`}
        onDragEnter={handleDragEnter}
        onSubmit={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
      >
        <input
          placeholder='fileInput'
          className='hidden'
          ref={inputRef}
          type='file'
          multiple={true}
          onChange={handleChange}
          accept='.pdf'
        />
        <p>
          Drag & Drop files or{' '}
          <span
            className='font-bold text-blue-600 cursor-pointer'
            onClick={openFileExplorer}
          >
            <u>Select files</u>
          </span>{' '}
          to upload
        </p>

        <div className='flex flex-col items-center p-3'>
          {files.map((file: any, idx: any) => (
            <div key={idx} className='flex flex-row space-x-5'>
              <span>{file.name}</span>
              <span
                className='text-red-500 cursor-pointer'
                onClick={() => removeFile(file.name, idx)}
              >
                remove
              </span>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};
