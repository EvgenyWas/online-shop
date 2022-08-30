import { TStorage } from "./types/types";

export const localStorageKeys = {
  user: "user",
};

export const userStorageInitialValue: TStorage = {
  cart: {
    amount: 0,
    order: [],
  },
  currentProductId: "",
  currencySymbol: '',
  currentCategory: '',
};