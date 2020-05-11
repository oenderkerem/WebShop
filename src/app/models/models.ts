export type Product = {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  sex: "male" | "female" | "unisex";
};

export type ProductVariant = {
  id: string;
  option: string;
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
