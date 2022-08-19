import { useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import { cartVar, currentCurrencyVar } from "../graphql/cache";
import { TCart } from "../types/types";
import { InjectedCartProps } from "./types";

export const injectCartReactiveVars = <S extends InjectedCartProps>(
  WrappedComponent: ComponentType<S>
) => {
  return (props: Omit<S, keyof InjectedCartProps>) => {
    const currentCurrency = useReactiveVar<string>(currentCurrencyVar);
    const cart = useReactiveVar<TCart>(cartVar);

    return (
      <WrappedComponent {...(props as S)} data={{ currentCurrency, cart }} />
    );
  };
};
