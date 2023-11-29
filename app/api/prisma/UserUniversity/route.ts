import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { userId, selectedUniversityIds } = await req.json();

    // First, delete existing UserUniversity relations for this user
    await prisma.userUniversity.deleteMany({
      where: { userId: userId },
    });

    // Then, create new relations based on selected universities
    const newUserUniversityData = selectedUniversityIds.map((universityId) => ({
      userId,
      universityId,
    }));

    await prisma.userUniversity.createMany({
      data: newUserUniversityData,
    });

    return new Response(
      JSON.stringify({ message: 'Universities updated successfully' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in API route:', error.message);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    });
  }
}
