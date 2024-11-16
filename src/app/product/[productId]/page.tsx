// Dynamic routing
import { Metadata } from "next";
import { notFound } from "next/navigation";

type ProductDetailProp = {
  params: {
    productId: string;
  };
};

//note cannot export geneatremeta data function and metadata object together

// Dynamic Metadata
export const generateMetadata = async ({
  params,
}: ProductDetailProp): Promise<Metadata> => {
  const { productId } = await params;
  const titleText = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Iphone ${productId}`);
    }, 5000);
  });

  return {
    title: `Product - ${titleText}`,
  };
};
export default async function ProductDetail({ params }: ProductDetailProp) {
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
