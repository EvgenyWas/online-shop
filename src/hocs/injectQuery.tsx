import { DocumentNode, useQuery, useReactiveVar } from "@apollo/client";
import { ComponentType, ReactElement } from "react";
import { currentCurrencyVar } from "../graphql/cache";

type InjectedProps = {
  data: {
    loading: boolean,
    error: Error | null,
    data: any,
  }
  currentCurrency: string
};

type TVariable = {
  key: string,
  value: string,
};

export const injectQuery = <S extends InjectedProps>(
    Component: ComponentType<S>, 
    query: DocumentNode, 
    queryVariable?: TVariable
  ) => {
  const variablesCondition = queryVariable ? {[queryVariable?.key]: queryVariable?.value} : {};

  const InjectedQuery = (props: S): ReactElement => {
    const { loading, error, data } = useQuery(query, {
      variables: variablesCondition,
    });
    const currentCurrency = useReactiveVar(currentCurrencyVar);

    return (
      <Component
        {...props as S}
        data={{loading, error, data}}
        currentCurrency={currentCurrency}
      />
    )
  };

  return InjectedQuery;
};