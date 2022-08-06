import { useReactiveVar } from "@apollo/client";
import { ComponentType } from "react";
import { currentCategoryVar, currentCurrencyVar, PLPVar } from "../graphql/cache";
import { InjectedPLPProps } from "./types";

export const injectPLPReactiveVars = <S extends InjectedPLPProps>(
    WrappedComponent: ComponentType<S>
  ) => {

  return (props: S) => {
    const currentCategory = useReactiveVar(currentCategoryVar);
    const currentCurrency = useReactiveVar(currentCurrencyVar);
    const PLP = useReactiveVar(PLPVar);
    
    return (
      <WrappedComponent
        {...props as S}
        data={{ currentCategory, currentCurrency, PLP }}
      />
    );
  }

};