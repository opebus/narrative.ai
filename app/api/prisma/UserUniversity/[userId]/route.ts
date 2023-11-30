import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = params.userId;

    if (!userId || typeof userId !== 'string') {
      return NextResponse.json(
        { error: 'Invalid or missing user ID' },
        { status: 400 }
      );
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
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
