import Link from "next/link";
import React from "react";

const Checkout = () => {
  return (
    <div className="flex min-h-screen flex-col p-24">
      <div className="flex items-center justify-between">
        <h1>Checkout</h1>
        <Link href="/">Go back home</Link>
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Checkout;
