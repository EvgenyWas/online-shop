import { ReactElement } from "react";
import { TCart, TProduct } from "../types/types";

export type InjectedCategoriesProps = {
  data: {
    loading: boolean,
    error: Error | null,
    data: any,
    currentCategory: string,
  }
};
  
export type TVariable = {
  key: string,
  value: string,
};

export type InjectedPLPProps = {
  data: {
    currentCategory: string,
    currentCurrency: string,
    PLP: any
  }
};

export type OutsideClickProps = {
  children: ReactElement,
  handler: (event: MouseEvent | TouchEvent | KeyboardEvent) => void
};

export type InjectedCurrentCurrencyProps = {
  currentCurrency: string
};

export type InjectedCartProps = {
  data: {
    currentCurrency: string
    cart: TCart
  }
}