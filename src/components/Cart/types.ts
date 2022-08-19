import { InjectedCurrentCurrencyProps } from "../../hocs/types";
import { TCart, TProduct } from "../../types/types";

export type TCartResultProps = {
  currentCurrency: string;
  cart: TCart;
};

export type TCartItemProps = InjectedCurrentCurrencyProps & {
  product: TProduct;
  className?: string;
};

export type TGalleryProps = {
  gallery: string[];
  name: string;
};

export type TGalleryState = {
  currentImageUrl: string;
  currentImageNumber: number;
};
