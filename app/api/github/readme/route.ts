import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const repoFullName = searchParams.get('repo');
  try {
    const url = `https://api.github.com/repos/${repoFullName}/readme`;
    const response = await fetch(url, {
      headers: { Accept: 'application/vnd.github.v3.raw' },
    });

    if (!response.ok) {
      throw new Error(`Error fetching README for ${repoFullName}`);
    }

    const content = await response.text();
    return new Response(JSON.stringify({ readme: content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Error fetching README content' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
