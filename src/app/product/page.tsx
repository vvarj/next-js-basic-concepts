import Link from "next/link";

const ProductPage = () => {
  return (
    <>
      <Link href={"/product/1"}>Product 1</Link>
      <Link href={"/product/2"}>Product 2</Link>
      {/* replace tag replace current history */}
      <Link href={"/product/3"} replace>
        Product 3
      </Link>
    </>
  );
};

export default ProductPage;
