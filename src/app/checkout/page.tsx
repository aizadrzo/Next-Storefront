"use client";
import React, { useState } from "react";
import { useCartContext } from "../Context/store";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { QuantityInput } from "@/components";

const Checkout = () => {
  const { cartItems, removeFromCart } = useCartContext();
  const emptyCart = cartItems?.length === 0;
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

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
          <li key={item?.id} className="items-center grid grid-cols-5 gap-5">
            <div className="grid place-content-center aspect-square border border-base-300 p-3 sm:p-5">
              <img
                src={item?.image}
                alt={item?.title}
                className="w-20 sm:w-16 h-auto"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-y-1 sm:gap-y-[10px] col-span-3">
              <Link href={`products/${item.id}`}>
                <h1 className="text-base md:text-lg leading-snug font-bold link link-hover">
                  {item?.title}
                </h1>
              </Link>
              <p className="text-sm md:text-base text-neutral-500">
                Price: ${item?.price * item?.quantity}
              </p>
              <button
                onClick={() => removeFromCart(item?.id)}
                className="link text-xs sm:text-sm"
              >
                Remove
              </button>
            </div>
            <div className="flex items-center justify-center w-full md:w-2/3">
              <QuantityInput
                quantity={item?.quantity || 1}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
