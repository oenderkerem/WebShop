export type Product = {
  id: number;
  title: string;
  specialText: string;
  descripion: string;
  gender: "men" | "women" | "unisex";
};

export type ProductVariant = {
  id: number;
  text: string;
  price: number;
  quantity: number;
  shippingCost: number;
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

export type ProductCategory = {
  id: number;
  textInUrl: string;
  displayText: string;
};
