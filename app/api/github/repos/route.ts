import { GITHUB_API_URL } from '@/constants/constant';
import { GitHubRepo } from '@/types/repo';
import { compareDesc } from 'date-fns';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const username = searchParams.get('username');
  if (!username || typeof username !== 'string') {
    return new Response(
      JSON.stringify({
        error: 'Username is required as a query parameter.',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }
    const repos = (await response.json()) as GitHubRepo[];
    const sortedRepos = repos.sort((a, b) =>
      compareDesc(new Date(a.updated_at), new Date(b.updated_at))
    );
    return new Response(JSON.stringify(sortedRepos), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error fetching GitHub repositories' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
