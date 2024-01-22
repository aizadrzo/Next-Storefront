import { useEffect, useState } from "react";

type RatingType = {
  count: number;
  price: number;
};

export type ProductsType = {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: RatingType;
  title: string;
};

const useFetchSingleProduct = ({ id }: { id: string }) => {
  const [singleProduct, setSingleProduct] = useState<
    ProductsType | undefined
  >();

  const fetchSingleProductData = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id ?? 1}`
      );
      const data = await response.json();
      setSingleProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSingleProductData();
  }, [id]);

  return { singleProduct };
};

export default useFetchSingleProduct;
