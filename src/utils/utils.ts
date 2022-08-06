import { PLPVar } from "../graphql/cache";
import { client } from "../graphql/client";
import { QUERY_CATEGORY_PRODUCTS } from "../graphql/queries";
import { TPrice } from "../types/types";

// Function for getting a word from capital letter
export function getWordFromCapitalLetter(word: string) {
    return word[0].toUpperCase() + word.slice(1);
};

// Function of determining a price for a current currency
export function getCurrentPrice(prices: TPrice[] | undefined, currentCurrency: string): TPrice | undefined {
    if (prices === undefined) {
        return
    } else {
        return prices.find(price => price.currency.symbol === currentCurrency) as TPrice;
    }
};

// Request products query with current category
export async function requestProductsQuery(category: string) {
    const response = await client.query({
        query: QUERY_CATEGORY_PRODUCTS,
        variables: {category: category}
    });
    PLPVar(response.data);
};