import { DocumentNode, useQuery } from "@apollo/client";
import { ComponentType, ReactElement } from "react";

type InjectedProps = {
  data: {
    loading: boolean,
    error: Error | null,
    data: any,
  }
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
    const { loading, error, data} = useQuery(query, {
      variables: variablesCondition,
    });

    return (
      <Component
        {...props as S}
        data={{loading, error, data}} 
      />
    )
  };

  return InjectedQuery;
};