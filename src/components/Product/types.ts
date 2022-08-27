import { InjectedCurrentCurrencyProps } from "../../hocs/types";
import { ProductPdpFragment } from "../../types/generated";
import { TAttribute } from "../../types/types";

export type TProductBarProps = InjectedCurrentCurrencyProps & {
  product: ProductPdpFragment | {};
};

export type TProductGalleryProps = {
  gallery: string[] | undefined;
  inStock: boolean | undefined;
};

export type TProductGalleryState = {
  activePicture: string;
};

export type TProductBarState = {
  chosenSwatch: TAttribute | null;
  chosenText: TAttribute | null;
};

export type TProductState = {
  product: ProductPdpFragment | {}
}