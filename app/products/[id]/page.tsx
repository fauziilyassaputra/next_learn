export default async function productPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="">
      <h1>product DETAIL page</h1>
    </div>
  );
}
