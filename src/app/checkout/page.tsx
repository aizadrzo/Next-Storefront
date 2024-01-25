"use client";
import React from "react";
import { useCartContext } from "../Context/store";
import { useRouter } from "next/navigation";
import { CartItem } from "@/components";

const Checkout = () => {
  const { cartItems } = useCartContext();
  const emptyCart = cartItems?.length === 0;
  const router = useRouter();

  if (emptyCart) {
    return (
      <div className="grid place-content-center py-[250px]">
        <h1 className="text-xl sm:text-3xl font-bold">
          There are no items in your cart.
        </h1>
        <div className="mt-8 flex items-center justify-center w-full">
          <button
            className="btn btn-primary w-full lg:w-fit"
            onClick={() => router.push("/")}
          >
            View Products
          </button>
        </div>
      </div>
    );
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
