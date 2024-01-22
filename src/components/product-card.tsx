import React from "react";

type ProductCardType = {
  category: string;
  image: string;
  title: string;
  id: string;
  price: number;
  isLoading?: boolean;
};

const ProductCard = ({
  category,
  image,
  title,
  id,
  price,
}: ProductCardType) => (
  <div className="card p-5" key={id}>
    <div className="border border-base-300 aspect-square grid place-content-center">
      <img src={image} alt={title} className="w-auto h-36" />
    </div>
    <div className="pt-5">
      <small className="text-sm text-gray-600 uppercase">{category}</small>
      <h1 className="card-title link link-hover underline-offset-1">{title}</h1>
      <h3 className="pt-3">${price}</h3>
    </div>
  </div>
);

export default ProductCard;
