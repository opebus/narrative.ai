import { NextApiRequest } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(req: NextApiRequest) {
  try {
    const universities = await prisma.university.findMany({
      select: {
        id: true,
        name: true,
        ranking: true,
      },
    });

    // If universities are found, return them with a custom message in headers
    if (universities.length > 0) {
      return new NextResponse(JSON.stringify(universities), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Custom-Message': 'Universities fetched successfully',
        },
      });
    } else {
      // If no universities are found, return a different message
      return new NextResponse(
        JSON.stringify({ error: 'No universities found' }),
        {
          status: 404,
          headers: {
            'Content-Type': 'application/json',
            'Custom-Message': 'No data available',
          },
        }
      );
    }
  } catch (error) {
    // Handle errors
    return new NextResponse(
      JSON.stringify({
        error: 'Internal server error',
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
