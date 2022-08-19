import { InMemoryCache, makeVar } from "@apollo/client";
import { ProductPlpFragment } from "../types/generated";
import { TCart } from "../types/types";

const initialCart = {
  amount: 0,
  order: [],
};

export const productsVar = makeVar<ProductPlpFragment[] | []>([]);
export const currentProductVar = makeVar<string>("");
export const currentCurrencyVar = makeVar<string>("$");
export const currentCategoryVar = makeVar<string>("all");
export const cartVar = makeVar<TCart>(initialCart);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          read() {
            return productsVar();
          },
        },
        currentProduct: {
          read() {
            return currentProductVar();
          },
        },
        currentCurrency: {
          read() {
            return currentCurrencyVar();
          },
        },
        currentCategory: {
          read() {
            return currentCategoryVar();
          },
        },
        cart: {
          read() {
            return cartVar();
          },
        },
      },
    },
  },
});
