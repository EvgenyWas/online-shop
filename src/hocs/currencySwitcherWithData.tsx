import { useQuery, useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import { currentCurrencyVar } from "../graphql/cache";
import { CurrenciesDocument, CurrenciesQuery } from "../types/generated";
import { TCurrencySwitcherInjectedProps } from "./types";

export const currencySwitcherWithData = <
  S extends TCurrencySwitcherInjectedProps
>(
  WrappedComponent: ComponentType<S>
) => {
  return (props: Omit<S, keyof TCurrencySwitcherInjectedProps>) => {
    const { data } = useQuery<CurrenciesQuery>(CurrenciesDocument);
    const currentCurrency = useReactiveVar<string>(currentCurrencyVar);

    return (
      <WrappedComponent {...(props as S)} data={{ data, currentCurrency }} />
    );
  };
};
