export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  return Response.json({
    message: "User GET response",
    user: {
      id,
      name: "Jane doe",
    },
  });
}
