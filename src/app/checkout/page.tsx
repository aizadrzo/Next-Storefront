"use client";
import React from "react";
import { useCartContext } from "../Context/store";

const Checkout = () => {
  const { cartItems } = useCartContext();

  return (
    <div className="flex min-h-screen flex-col p-24">
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
