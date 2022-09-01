import { useQuery, useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import { localStorageKeys } from "../config";
import { currentProductVar } from "../graphql/cache";
import { ProductDocument, ProductQuery } from "../types/generated";
import { getLocalStorageValue } from "../utils/utils";
import { InjectedCurrentProductProps } from "./types";

export const injectCurrentProduct = <S extends InjectedCurrentProductProps>(
  WrappedComponent: ComponentType<S>
) => {
  return (props: Omit<S, keyof InjectedCurrentProductProps>) => {
    const key = localStorageKeys.user;
    const currentProduct = useReactiveVar<string>(currentProductVar);
    const idFromLocalStorage = getLocalStorageValue(key)?.currentProductId;
    const id = currentProduct || idFromLocalStorage;
    const { data, loading } = useQuery<ProductQuery>(ProductDocument, {
      variables: { id: id },
    });
    if (!loading) {
      return (
        <WrappedComponent {...(props as S)} data={{ currentProduct, data }} />
      );
    } else {
      return (
        <WrappedComponent
          {...(props as S)}
          data={{ currentProduct, data: null }}
        />
      );
    }
  };
};
