import { InMemoryCache, makeVar } from "@apollo/client";

export const productsVar = makeVar([]);
export const currentCurrencyVar = makeVar('$');
export const currentCategoryVar = makeVar('all');
export const cartVar = makeVar([]);

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                products: {
                    read() {
                        return productsVar()
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