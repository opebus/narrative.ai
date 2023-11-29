async function updateUserField(userId, fieldName, fieldValue) {
  let updateData = {};

  // Assume that only scalar fields or simple one-to-many relations are being updated
  updateData[fieldName] = fieldValue;

  await prisma.user.update({
    where: { id: userId },
    data: updateData,
  });
}

export async function POST(req) {
  try {
    const data = await req.json();
    const { userId, fieldName, fieldValue } = data;

    if (typeof userId !== 'string' || typeof fieldName !== 'string') {
      return new Response(JSON.stringify({ message: 'Invalid input format' }), {
        status: 422,
      });
    }

    await updateUserField(userId, fieldName, fieldValue);

    return new Response(
      JSON.stringify({
        message: `Field ${fieldName} updated successfully`,
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
