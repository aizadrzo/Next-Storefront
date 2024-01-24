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

export type CartItemType = {
  productId: string;
  quantity: number;
};
