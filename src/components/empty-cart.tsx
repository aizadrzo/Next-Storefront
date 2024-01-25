import React from "react";
import { useRouter } from "next/navigation";

const EmptyCart = () => {
  const router = useRouter();

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
};

export default EmptyCart;
