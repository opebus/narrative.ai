import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { GitHubRepo } from '@/types/repo';
import { GITHUB_API_URL } from '@/constants/constant';
import { compareDesc } from 'date-fns';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = req.query.username;

  if (!username || typeof username !== 'string') {
    res
      .status(400)
      .json({ error: 'Username is required as a query parameter.' });
    return;
  }

  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/users/${username}/repos`
    );
    const repos: GitHubRepo[] = response.data;
    const sortedRepos = repos.sort((a, b) =>
      compareDesc(new Date(a.updated_at), new Date(b.updated_at))
    );
    res.status(200).json(sortedRepos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching GitHub repositories' });
  }
}
