// Dynamic routing

import { notFound } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;

  if (Number(productId) > 500) {
    notFound();
  }
  return (
    <>
      <h3>Product Detail {productId}</h3>
    </>
  );
}
