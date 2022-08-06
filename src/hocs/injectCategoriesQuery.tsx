import { DocumentNode, useQuery, useReactiveVar } from "@apollo/client";
import { ComponentType, ReactElement } from "react";
import { currentCategoryVar } from "../graphql/cache";
import { InjectedCategoriesProps, TVariable } from "./types";

export const injectCategoriesQuery = <S extends InjectedCategoriesProps>(
    Component: ComponentType<S>, 
    query: DocumentNode, 
    queryVariable?: TVariable
  ) => {
  const variablesCondition = queryVariable ? {[queryVariable?.key]: queryVariable?.value} : {};

  const InjectedQuery = (props: S): ReactElement => {
    const { loading, error, data } = useQuery(query, {
      variables: variablesCondition,
    });
    const currentCategory = useReactiveVar(currentCategoryVar);

    return (
      <Component
        {...props as S}
        data={{loading, error, data, currentCategory}} 
      />
    )
  };

  return InjectedQuery;
};