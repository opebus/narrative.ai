import { NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function updateQuestions(
  userId: string,
  answers: Record<number, string>
) {
  for (const [questionNumber, answer] of Object.entries(answers)) {
    const qNumber = parseInt(questionNumber);

    // Check if answerText is indeed a string
    if (typeof answer !== 'string') {
      throw new Error(`Invalid answer format for question number ${qNumber}`);
    }

    const existingQuestion = await prisma.question.findFirst({
      where: {
        userId: userId,
        questionNumber: qNumber,
      },
    });

    if (existingQuestion) {
      await prisma.question.update({
        where: { id: existingQuestion.id },
        data: { answer },
      });
    } else {
      await prisma.question.create({
        data: {
          userId,
          questionNumber: qNumber,
          answer,
        },
      });
    }
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { userId, answers } = data;

    if (typeof userId !== 'string' || typeof answers !== 'object') {
      return new Response(JSON.stringify({ message: 'Invalid input format' }), {
        status: 422,
      });
    }

    await updateQuestions(userId, answers);

    return new Response(
      JSON.stringify({
        message: 'Questions updated successfully',
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
