import { AttributeSet, ProductPdpFragment } from "./generated";

export type TPrice = {
  amount: number;
  currency: {
    label: string;
    symbol: string;
  };
};

export type TAttribute = {
  displayValue: string;
  value: string;
  id: string;
};

export type TChosenAttribute = {
  chosenAttribute: TAttribute;
}

export type TChosenAttributeSet = Omit<AttributeSet, 'items'> & TChosenAttribute;

export type TProduct = {
  product: ProductPdpFragment;
  chosenAttributes: TChosenAttributeSet[];
  amount: number;
};

export type TCart = {
  amount: number;
  order: TProduct[];
};

export type TManageAmountOperations = "decrease" | "increase";

export type TStorage = {
  cart: TCart;
  currentProductId: string;
  currencySymbol: string;
  currentCategory: string;
};