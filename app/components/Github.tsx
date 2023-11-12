'use client';

import { useState } from 'react';
import { Select, SelectItem, Chip, Input, Button } from '@nextui-org/react';
import { GitHubRepo } from '@/types/repo';
import { useRouter } from 'next/navigation';

const Github = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [username, setUsername] = useState<string>('');
  const [selectedRepoNames, setSelectedRepoNames] = useState<string[]>([]);
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

  const onFinalSubmit = () => {
    console.log('Selected Repos:', Array.from(selectedRepoNames));
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='shadow-xl rounded-lg p-6 max-w-lg w-full'>
        <h1 className='text-2xl mb-4 text-center font-serif'>
          Drop your GitHub username 👇
        </h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <Input
            type='text'
            value={username}
            label='Username'
            className='w-full  rounded-md focus:border-blue-500'
            defaultValue='noobcoder69'
            variant='bordered'
            onValueChange={setUsername}
          />
          <Button
            type='submit'
            className='w-full bg-teal-800 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded'
          >
            Fetch Repos
          </Button>
        </form>

        {isRepoFetched && (
          <div className='mt-6'>
            <h1 className='text-2xl mb-4 text-center font-serif'>
              Choose the repositories 👇
            </h1>
            <Select
              isMultiline={true}
              size='lg'
              radius='md'
              label='Your Repositories'
              placeholder='Select repositories'
              variant='bordered'
              selectionMode='multiple'
              className='max-w-lg w-full'
              items={repos}
              onSelectionChange={setSelectedRepoNames}
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

            <Button
              onClick={onFinalSubmit}
              className='mt-4 w-full bg-teal-800 hover:bg-teal-950 text-white font-bold py-2 px-4 rounded'
              variant='solid'
            >
              Submit Selection
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Github;
