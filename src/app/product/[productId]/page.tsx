// Dynamic routing

export default async function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  return (
    <>
      <h3>Product Detail {productId}</h3>
    </>
  );
}
