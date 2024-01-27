import { ProductsType } from "@/types";

export const formatMoney = (price: ProductsType["price"]) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedPrice.format(price);
};
