import React from "react";

type QuantityInputType = {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

const QuantityInput = ({
  quantity,
  onIncrement,
  onDecrement,
}: QuantityInputType) => (
  <div className="grid grid-cols-3 border border-primary">
    <button
      type="button"
      className="leading-10 text-primary transition hover:bg-base-200"
      onClick={onDecrement}
    >
      &minus;
    </button>

    <input
      type="number"
      id="Quantity"
      value={quantity}
      onChange={(e) => e.preventDefault()}
      className="border-transparent text-center [-moz-appearance:_textfield] text-xs sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    />

    <button
      type="button"
      className="leading-10 text-primary transition hover:bg-base-200"
      onClick={onIncrement}
    >
      {"\u002B"}
    </button>
  </div>
);

export default QuantityInput;
