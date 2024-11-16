"use client";
import { useRouter } from "next/navigation";
import React from "react";

function OrderProductPage() {
  const router = useRouter();
  const onClickHandler = () => {
    console.log("Button clicked");
    router.push("/");
  };
  return (
    <div>
      <h2>Order Product Page</h2>
      <button onClick={onClickHandler}>Order</button>
    </div>
  );
}

export default OrderProductPage;
