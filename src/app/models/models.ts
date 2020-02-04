export type Product = {
  id: string;
  title: string;
  image: string;
  isProductDetailsOpen: boolean;
  variations: ProductVariant[];
  shortDescription: string;
  longDescription: string;
  sex: "male" | "female" | "unisex";
};

export type ProductVariant = {
  id: string;
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

export type Notification = {
  message: string;
  displayTime: "short" | "long";
};
