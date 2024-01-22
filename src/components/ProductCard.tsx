import React from "react";

type ProductCardType = {
  image: string;
  title: string;
  description: string;
  id: string;
  price: number;
};

const ProductCard = ({
  image,
  title,
  description,
  id,
  price,
}: ProductCardType) => {
  return (
    <div className="card card-bordered p-5" key={id}>
      <img src={image} alt={title} />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p>{description}</p>
        <h3>{price}</h3>
      </div>
    </div>
  );
};

export default ProductCard;
