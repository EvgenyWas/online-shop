import { InMemoryCache, makeVar } from "@apollo/client";

export const PLPVar = makeVar([]);
export const currentCurrencyVar = makeVar({});
export const currentCategoryVar = makeVar('all');
export const cartVar = makeVar([]);

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                PLP: {
                    read() {
                        return PLPVar()
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