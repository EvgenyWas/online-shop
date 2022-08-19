import { useQuery, useReactiveVar } from "@apollo/client";
import { ComponentType, ReactElement } from "react";
import { currentCurrencyVar } from "../graphql/cache";
import { CurrenciesDocument, CurrenciesQuery } from "../types/generated";
import { TCurrencySwitcherInjectedProps } from "./types";

export const currencySwitcherWithData = <
  S extends TCurrencySwitcherInjectedProps
>(
  Component: ComponentType<S>
) => {
  return (props: S): ReactElement => {
    const { data } = useQuery<CurrenciesQuery>(CurrenciesDocument);
    const currentCurrency = useReactiveVar(currentCurrencyVar);

    return <Component {...(props as S)} data={{ data, currentCurrency }} />;
  };
};
