import { userStorageInitialValue, localStorageKeys } from "../config";
import { productsVar } from "../graphql/cache";
import { client } from "../graphql/client";
import {
  CategoryDocument,
  GalleryProductDocument,
  Price,
  ProductDocument,
  ProductPdpFragment,
  ProductPlpFragment,
} from "../types/generated";
import { TCart, TPrice, TProduct, TStorage } from "../types/types";

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

// Function to get product gallery and inStock value
export async function getProductGallery(id: string) {
  const response = await client.query({
    query: GalleryProductDocument,
    variables: { id: id },
  });
  const gallery = response.data.product?.gallery;
  const inStock = response.data.product?.inStock;

  return { gallery, inStock };
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

// Function to find the same new product in the cart
export function findSameProductInCart(
  cart: TProduct[],
  product: TProduct,
  index?: number
) {
  const sameProduct = cart.findIndex((prod, ind) => {
    const conditionSameId = prod.product?.id === product.product?.id;
    const conditionSameSwatch = prod.swatch?.id === product.swatch?.id;
    const conditionSameText = prod.text?.id === product.text?.id;
    const conditionSameIndex = index !== undefined ? ind !== index : true;

    if (
      conditionSameId &&
      conditionSameSwatch &&
      conditionSameText &&
      conditionSameIndex
    ) {
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
  amount: number | undefined
): number | undefined {
  if (amount) {
    const amountTax = (amount * tax) / 100;
    const roundedAmountTax = Number(amountTax.toFixed(2));

    return roundedAmountTax;
  }

  return;
}

// Function for getting an amount of the cart
export function getAmountCart(
  cart: TProduct[],
  currentCurrency: string
): number | undefined {
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
    const roundedAmount = Number(amount.toFixed(2));

    return roundedAmount;
  }
}

// Function to find an attribute in the product
export function findAttribute(
  product: ProductPdpFragment,
  attribute: "swatch" | "text"
) {
  const findedAttribute = product.attributes?.find(
    (attr) => attr?.type === attribute
  );

  return findedAttribute;
}

// Function to get a value from local storage with a key
export function getLocalStorageValue(key: string) {
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