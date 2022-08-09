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
};

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
};

// Function for getting a tax of an amount
export function getAmountTax(tax: number, amount: number) {
    if (amount) {
        const amountTax = amount * tax / 100;
        const roundedAmountTax = amountTax.toFixed(2);

        return roundedAmountTax;
    };
    
    return
};

// Function for getting an amount of the cart
export function getAmountCart(cart: TProduct[], currentCurrency: string) {
    if (cart === undefined) {
        return
    } else {
        const amount = cart.reduce((acc, product) => {
            const prices = product.product.prices;
            const currentPrice = prices.find((price: any) => price.currency.symbol === currentCurrency);
            const totalAmount = currentPrice.amount * product.amount;
    
            return acc += totalAmount;
        }, 0);
    
        return amount;
    };
};

// Function for getting a quantity of products in the cart
export function getProductsQuantity(cart: TProduct[]) {
    if (cart === undefined) {
        return
    } else {
        const quantity = cart.reduce((acc, product) => acc += product.amount, 0);

        return quantity;
    };
};