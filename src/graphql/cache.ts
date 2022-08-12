import { InMemoryCache, makeVar } from "@apollo/client";
import { TCart, TProduct } from "../types/types";

const initialCart = {
    amount: 0,
    order: []
}

export const productsVar = makeVar([]);
export const currentProductVar = makeVar('');
export const currentCurrencyVar = makeVar('$');
export const currentCategoryVar = makeVar('all');
export const cartVar = makeVar<TCart>(initialCart);

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                products: {
                    read() {
                        return productsVar()
                    }
                },
                currentProduct: {
                    read() {
                        return currentProductVar()
                    }
                },
                currentCurrency: {
                    read() {
                        return currentCurrencyVar()
                    }
                },
                currentCategory: {
                    read() {
                        return currentCategoryVar()
                    }
                },
                cart: {
                    read() {
                        return cartVar()
                    }
                },
            }
        }
    }
});