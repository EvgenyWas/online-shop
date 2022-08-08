import { productsVar } from "../graphql/cache";
import { client } from "../graphql/client";
import { QUERY_CATEGORY_PRODUCTS } from "../graphql/queries";
import { TPrice, TProduct } from "../types/types";

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
    productsVar(response.data);
};

// Function to find the same new product in the cart
function findSameProductInCart(cart: TProduct[], product: TProduct) {
    const sameProduct = cart.findIndex(prod => {
        const conditionSameId = prod.product.id === product.product.id;
        const conditionSameSwatch = prod.swatch?.id === product.swatch?.id;
        const conditionSameText = prod.text?.id === product.text?.id;

        if (
            conditionSameId &&
            conditionSameSwatch &&
            conditionSameText
        ) {
            return true
        }
    });

    if (sameProduct === -1) {
        return false;
    } else {
        return sameProduct;
    };
}

// Function for adding a new product to the cart
export function addProductToCart(cart: TProduct[], product: TProduct) {
    const sameProduct = findSameProductInCart(cart, product);    
    const updateCart = cart;

    if (sameProduct || sameProduct === 0) {
        updateCart[sameProduct].amount = cart[sameProduct].amount + 1;
    } else {
        updateCart.push(product);
    };

    return updateCart;
}