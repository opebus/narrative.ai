import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId;

    if (!userId || typeof userId !== 'string') {
      return NextResponse.error('Invalid or missing user ID', 400);
    }

    // Retrieve university IDs associated with the user
    const userUniversities = await prisma.userUniversity.findMany({
      where: { userId },
      select: { universityId: true },
    });

    const universityIds = userUniversities.map((u) => u.universityId);

    // Fetch university details
    const universities = await prisma.university.findMany({
      where: { id: { in: universityIds } },
    });

    return NextResponse.json(universities);
  } catch (error) {
    return NextResponse.error('Internal server error', 500);
  }
}
