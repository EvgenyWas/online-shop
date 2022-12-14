import { localStorageKeys, userStorageInitialValue } from "../config";
import { productsVar } from "../graphql/cache";
import { client } from "../graphql/client";
import {
  AttributeSet,
  CategoryDocument,
  Price,
  ProductDocument,
  ProductPdpFragment,
  ProductPlpFragment,
} from "../types/generated";
import {
  TCart,
  TChosenAttributeSet,
  TPrice,
  TProduct,
  TStorage,
} from "../types/types";

// Function for getting a word from capital letter
export function getWordFromCapitalLetter(word: string) {
  return word[0].toUpperCase() + word.slice(1);
}

// Function of determining a price for a current currency
export function getCurrentPrice(
  prices: TPrice[] | undefined,
  currentCurrency: string
): TPrice | undefined {
  if (prices === undefined) {
    return;
  } else {
    return prices.find(
      (price) => price.currency.symbol === currentCurrency
    ) as TPrice;
  }
}

// Request products query with current category
export async function requestProductsQuery(category: string) {
  const response = await client.query({
    query: CategoryDocument,
    variables: { category: category },
  });
  const products = response.data.category?.products as ProductPlpFragment[];
  productsVar(products);
}

// Function to get product pdp
export async function getProductPDP(id: string) {
  const response = await client.query({
    query: ProductDocument,
    variables: { id: id },
  });
  const product = response.data.product as ProductPdpFragment;

  return product;
}

function findSameProductInCart(cart: TProduct[], product: TProduct) {
  const sameProduct = cart.findIndex((prod) => {
    const conditionSameId = prod.product?.id === product.product?.id;
    const conditionSameAttributes = prod.chosenAttributes?.every(
      (item, index) => {
        return (
          item.chosenAttribute.id ===
          product.chosenAttributes[index]?.chosenAttribute.id
        );
      }
    );

    if (conditionSameId && conditionSameAttributes) {
      return true;
    }

    return false;
  });

  if (sameProduct === -1) {
    return false;
  } else {
    return sameProduct;
  }
}

// Function for adding a new product to the cart
export function addProductToCart(cart: TProduct[], product: TProduct) {
  const sameProduct = findSameProductInCart(cart, product);
  const updateCart = cart;

  if (sameProduct || sameProduct === 0) {
    updateCart[sameProduct].amount += 1;
  } else {
    updateCart.push(product);
  }

  return updateCart;
}

// Function to decrease a product amount in the cart
export function decreaseProductAmount(cart: TProduct[], product: TProduct) {
  const sameProduct = findSameProductInCart(cart, product) as number;
  let updateCart = cart;

  if (cart[sameProduct].amount === 1) {
    updateCart = cart.filter((product, index) => index !== sameProduct);
  } else {
    updateCart[sameProduct].amount -= 1;
  }

  return updateCart;
}

// Function for getting a tax of an amount
export function getAmountTax(
  tax: number,
  amount: number | undefined | string
): string | undefined {
  if (amount) {
    const amountTax = (+amount * tax) / 100;
    const roundedAmountTax = amountTax.toFixed(2);

    return roundedAmountTax;
  }

  return;
}

// Function for getting an amount of the cart
export function getAmountCart(
  cart: TProduct[],
  currentCurrency: string
): string | undefined {
  if (!cart.length) {
    return;
  } else {
    const amount = cart.reduce((acc, product) => {
      const prices = product.product.prices;
      const currentPrice = prices.find(
        (price: Price) => price.currency.symbol === currentCurrency
      );
      if (currentPrice) {
        const totalAmount = currentPrice.amount * product.amount;
        return (acc += totalAmount);
      }

      return 0;
    }, 0);
    const roundedAmount = amount.toFixed(2);

    return roundedAmount;
  }
}

// Function to get a value from local storage with a key
export function getLocalStorageValue(key: string): TStorage {
  try {
    const value = localStorage.getItem(key) as string;
    return JSON.parse(value);
  } catch (error) {
    return userStorageInitialValue;
  }
}

// Function to set a value to local storage with a key
export function setValueLocalStorage(key: string, item: TStorage) {
  try {
    const valueStorage = JSON.stringify(item);
    localStorage.setItem(key, valueStorage);
  } catch (error) {
    const valueStorage = JSON.stringify(userStorageInitialValue);
    localStorage.setItem(key, valueStorage);
  }
}

// Function for updating the cart in local storage
export function updateLocalStorageCart(cart: TCart) {
  const key = localStorageKeys.user;
  const value = getLocalStorageValue(key);
  const newValue = {
    ...value,
    cart: cart,
  };
  setValueLocalStorage(key, newValue);
}

// Function for updating the current currency symbol in local storage
export function updateLocalStorageCurrencySymbol(currencySymbol: string) {
  const key = localStorageKeys.user;
  const value = getLocalStorageValue(key);
  const newValue = {
    ...value,
    currencySymbol: currencySymbol,
  };
  setValueLocalStorage(key, newValue);
}

export function updateLocalStorageCurrentProductId(id: string) {
  const key = localStorageKeys.user;
  const value = getLocalStorageValue(key);
  const newValue = {
    ...value,
    currentProductId: id,
  };
  setValueLocalStorage(key, newValue);
}

// Function for formatting source attributes to needed view
export function formatAttributes(
  attributes: AttributeSet[]
): TChosenAttributeSet[] {
  const formattedAttributes = attributes?.map((attribute) => {
    const formattedAttribute = {
      ...attribute,
      chosenAttribute: attribute.items![0],
    };
    delete formattedAttribute.items;

    return formattedAttribute;
  });

  return formattedAttributes as TChosenAttributeSet[];
}
