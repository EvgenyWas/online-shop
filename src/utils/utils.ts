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
        const conditionSameId = prod.product?.id === product.product?.id;
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
        updateCart[sameProduct].amount += 1;
    } else {
        updateCart.push(product);
    };

    return updateCart;
};

// Function to decrease a product amount in the cart
export function decreaseProductAmount(cart: TProduct[], product: TProduct) {
    const sameProduct = findSameProductInCart(cart, product) as number;    
    let updateCart = cart;

    if (cart[sameProduct].amount === 1) {
        updateCart = cart.filter((product, index) => index !== sameProduct);
    } else {
        updateCart[sameProduct].amount -= 1;
    };

    return updateCart;
};

// Function for getting a tax of an amount
export function getAmountTax(tax: number, amount: number | undefined): number | undefined {
    if (amount) {
        const amountTax = amount * tax / 100;
        const roundedAmountTax = Number(amountTax.toFixed(2));

        return roundedAmountTax;
    };
    
    return
};

// Function for getting an amount of the cart
export function getAmountCart(cart: TProduct[], currentCurrency: string): number | undefined {
    if (!cart.length) {
        return
    } else {
        const amount = cart.reduce((acc, product) => {
            const prices = product.product.prices;
            const currentPrice = prices.find((price: any) => price.currency.symbol === currentCurrency);
            const totalAmount = currentPrice.amount * product.amount;
    
            return acc += totalAmount;
        }, 0);
        const roundedAmount = Number(amount.toFixed(2));

        return roundedAmount;
    };
};

// Function for getting a quantity of the product in the cart
export function getProductQuantity(cart: TProduct[], product: TProduct) {
    console.log('cart', cart)
    console.log('product', product)
    const sameProduct = findSameProductInCart(cart, product) as number;
    console.log(sameProduct)
    const productQuantity = cart[sameProduct].amount;
    
    return productQuantity;
};