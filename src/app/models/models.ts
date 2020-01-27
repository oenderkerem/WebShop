export type Product = {
  id: string;
  title: string;
  image: string;
  variations: ProductVariant[];
  shortDescription: string;
  longDescription: string;
  sex: "male" | "female" | "unisex";
};

export type ProductVariant = {
  option: string;
  price: number;
  selected: boolean;
  quantity: number;
};

export type ShoppingCartEntry = {
  product: Product;
  variation: ProductVariant;
  amount: number;
};

export type DetailedProductVariantItem = {
  variant: ProductVariant;
  counter: number;
  selected: boolean;
};
