import { useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import { cartVar, currentCurrencyVar } from "../graphql/cache";
import { InjectedCartProps } from "./types";

export const injectCartReactiveVars = <S extends InjectedCartProps>(
  WrappedComponent: ComponentType<S>
) => {
  return (props: S) => {
    const currentCurrency = useReactiveVar(currentCurrencyVar);
    const cart = useReactiveVar(cartVar);

    return (
      <WrappedComponent {...(props as S)} data={{ currentCurrency, cart }} />
    );
  };
};
