import { NextRequest } from 'next/server';
import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateUser(
  userId: string,
  username: string,
  repoInformation: any[]
) {
  await prisma.user.upsert({
    where: { id: userId },
    update: { username },
    create: { id: userId, username },
  });

  for (const repo of repoInformation) {
    await prisma.gitHub.upsert({
      where: { projectId: repo.projectId },
      update: { readme: repo.readme },
      create: { ...repo, userId },
    });
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { userId, username, repoInformation } = data;

    if (
      typeof userId !== 'string' ||
      typeof username !== 'string' ||
      !Array.isArray(repoInformation)
    ) {
      return new Response(JSON.stringify({ message: 'Invalid input format' }), {
        status: 422,
      });
    }

    const updatedUser = await updateUser(userId, username, repoInformation);

    return new Response(
      JSON.stringify({
        message: 'User updated successfully',
        user: updatedUser,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in API route:', error.message);

    // Specific error handling
    let statusCode = 500;
    let message = 'Internal server error';

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      statusCode = 400;
      message = 'Database request error';
    }

    return new Response(JSON.stringify({ message }), { status: statusCode });
  }
}
