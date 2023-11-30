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
      return NextResponse.json(
        { error: 'Invalid or missing user ID' },
        { status: 400 }
      );
    }

    // Retrieve professor IDs associated with the user
    const userProfessors = await prisma.userProfessor.findMany({
      where: { userId },
      select: { professorId: true },
    });

    const professorIds = userProfessors.map((u) => u.professorId);

    // Fetch professor details
    const professors = await prisma.professor.findMany({
      where: { id: { in: professorIds } },
    });

    return NextResponse.json(professors);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
