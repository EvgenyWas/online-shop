import { ReactElement } from "react";
import {
  CategoriesQuery,
  CurrenciesQuery,
  ProductPlpFragment,
} from "../types/generated";
import { TCart } from "../types/types";

export type InjectedCategoriesProps = {
  data: {
    data: CategoriesQuery | undefined;
    currentCategory: string;
  };
};

export type TVariable = {
  key: string;
  value: string;
};

export type InjectedPLPProps = {
  data: {
    currentCategory: string;
    currentCurrency: string;
    products: ProductPlpFragment[];
  };
};

export type OutsideClickProps = {
  children: ReactElement;
  handler: (event: MouseEvent | TouchEvent | KeyboardEvent) => void;
  className?: string;
};

export type InjectedCurrentCurrencyProps = {
  currentCurrency: string;
};

export type InjectedCartProps = {
  data: {
    cart: TCart;
    currentCurrency: string;
  };
};

export type TCurrencySwitcherInjectedProps = {
  data: {
    data: CurrenciesQuery;
    currentCurrency: string;
  };
};
