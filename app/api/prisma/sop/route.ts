import { PrismaClient } from '@prisma/client';
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

async function createSOPWithText(userId, text) {
  return prisma.sOP.create({
    data: {
      text: text,
      user: {
        connect: { id: userId },
      },
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { userId, text } = data;

    if (typeof userId !== 'string' || typeof text !== 'string') {
      return new Response(JSON.stringify({ message: 'Invalid input format' }), {
        status: 422,
      });
    }

    const newSOP = await createSOPWithText(userId, text);

    return new Response(
      JSON.stringify({
        message: `SOP created successfully with ID: ${newSOP.id}`,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in API route:', error.message);
    return new Response(JSON.stringify({ message: 'Internal server error' }), {
      status: 500,
    });
  }
}
