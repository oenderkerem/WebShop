export type Product = {
  id: string;
  title: string;
  image: string;
  variations: ProductVariant[];
  sex: "male" | "female" | "unisex";
};

export type ProductVariant = {
  option: string;
  price: number;
};

export type ShoppingCartEntry = {
  product: Product;
  amount: number;
};
