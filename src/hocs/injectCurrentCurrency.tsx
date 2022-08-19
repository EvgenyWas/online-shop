import { useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import { currentCurrencyVar } from "../graphql/cache";
import { InjectedCurrentCurrencyProps } from "./types";

export const injectCurrentCurrency = <S extends InjectedCurrentCurrencyProps>(
  WrappedComponent: ComponentType<S>
) => {
  return (props: S) => {
    const currentCurrency = useReactiveVar(currentCurrencyVar);

    return (
      <WrappedComponent {...(props as S)} currentCurrency={currentCurrency} />
    );
  };
};
