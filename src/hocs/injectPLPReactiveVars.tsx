import { useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import {
  currentCategoryVar,
  currentCurrencyVar,
  productsVar,
} from "../graphql/cache";
import { ProductPlpFragment } from "../types/generated";
import { InjectedPLPProps } from "./types";

export const injectPLPReactiveVars = <S extends InjectedPLPProps>(
  WrappedComponent: ComponentType<S>
) => {
  return (props: Omit<S, keyof InjectedPLPProps>) => {
    const currentCategory = useReactiveVar<string>(currentCategoryVar);
    const currentCurrency = useReactiveVar<string>(currentCurrencyVar);
    const products = useReactiveVar<ProductPlpFragment[] | []>(productsVar);

    return (
      <WrappedComponent
        {...(props as S)}
        data={{ currentCategory, currentCurrency, products }}
      />
    );
  };
};
