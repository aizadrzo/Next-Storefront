"use client";
import React from "react";
import { useCartContext } from "../Context/store";
import { CartItem, EmptyCart } from "@/components";

const Checkout = () => {
  const { cartItems } = useCartContext();
  const emptyCart = cartItems?.length === 0;

  if (emptyCart) {
    return <EmptyCart />;
  }

  return (
    <div className="h-full py-5">
      <h1 className="text-xl sm:text-3xl font-bold">Your Cart</h1>
      <ul className="mt-8 space-y-8">
        {cartItems?.map((item) => (
          <CartItem
            key={item?.id}
            id={item?.id}
            image={item?.image}
            title={item?.title}
            price={item?.price}
            quantity={item?.quantity}
          />
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
