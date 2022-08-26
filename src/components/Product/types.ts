import { InjectedCurrentCurrencyProps } from "../../hocs/types";
import { TAttribute } from "../../types/types";

export type TProductBarProps = InjectedCurrentCurrencyProps & {
  id: string;
};

export type TProductGalleryProps = {
  id: string;
};

export type TProductGalleryState = {
  gallery: string[];
  activePicture: string;
  inStock: boolean;
};

export type TProductBarState = {
  product: any;
  chosenSwatch: TAttribute | null;
  chosenText: TAttribute | null;
};
