"use client";
import React from "react";
import { useCartContext } from "../Context/store";
import { useRouter } from "next/navigation";
import { CartItemType } from "@/types/hooks.types";

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
          <li key={item?.id} className="grid grid-cols-5 gap-5">
            <div className="grid place-content-center aspect-square border border-base-300 p-5">
              <img
                src={item?.image}
                alt={item?.title}
                className="w-16 h-auto"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-y-[10px] col-span-3">
              <h1 className="text-base md:text-lg leading-snug font-bold">
                {item?.title}
              </h1>
              <p className="text-sm md:text-base text-neutral-500">
                Price: ${item?.price}
              </p>
            </div>
            <p className="grid place-content-center">{item?.quantity || 1}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
