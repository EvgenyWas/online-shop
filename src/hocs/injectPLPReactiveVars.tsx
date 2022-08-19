import { useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import {
  currentCategoryVar,
  currentCurrencyVar,
  productsVar,
} from "../graphql/cache";
import { InjectedPLPProps } from "./types";

export const injectPLPReactiveVars = <S extends InjectedPLPProps>(
  WrappedComponent: ComponentType<S>
) => {
  return (props: S) => {
    const currentCategory = useReactiveVar(currentCategoryVar);
    const currentCurrency = useReactiveVar(currentCurrencyVar);
    const products = useReactiveVar(productsVar);

    return (
      <WrappedComponent
        {...(props as S)}
        data={{ currentCategory, currentCurrency, products }}
      />
    );
  };
};
