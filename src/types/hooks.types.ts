type RatingType = {
  count: number;
  price: number;
};

export type ProductsType = {
  title: string;
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: RatingType;
};

export type CartItemType = Omit<ProductsType[], "rating" | "description"> & {
  quantity?: number;
};
