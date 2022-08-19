import { useQuery, useReactiveVar } from "@apollo/client";
import { ComponentType, ReactElement } from "react";
import { CategoriesDocument, CategoriesQuery } from "../types/generated";
import { currentCategoryVar } from "../graphql/cache";
import { InjectedCategoriesProps } from "./types";

export const injectCategoriesQuery = <S extends InjectedCategoriesProps>(
  WrappedComponent: ComponentType<S>
): ComponentType<S> => {
  return (props: Omit<S, keyof InjectedCategoriesProps>): ReactElement => {
    const { data } = useQuery<CategoriesQuery>(CategoriesDocument);
    const currentCategory = useReactiveVar<string>(currentCategoryVar);

    return <WrappedComponent {...(props as S)} data={{ data, currentCategory }} />;
  };
};
