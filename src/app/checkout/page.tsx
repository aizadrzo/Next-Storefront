"use client";
import React from "react";
import Link from "next/link";
import { useFetchCartItems } from "@/hooks";

const Checkout = () => {
  const { cartItems } = useFetchCartItems();
  console.log(cartItems);
  return (
    <div className="flex min-h-screen flex-col p-24">
      <div className="flex items-center justify-between">
        <h1>Checkout</h1>
        <Link href="/">Go back home</Link>
      </div>
      <div className="flex">
        {cartItems?.map((item) => (
          <div key={item?.productId}>
            <h1>{item?.productId}</h1>
            <p>{item?.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkout;
