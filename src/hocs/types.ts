import { ReactElement } from "react";

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
    currentCurrency: {
      label: string,
      symbol: string
    },
    PLP: any
  }
};

export type OutsideClickProps = {
  children: ReactElement,
  handler: (event: MouseEvent | TouchEvent | KeyboardEvent) => void
};

export type InjectedCurrentCurrencyProps = {
  currentCurrency: string
}