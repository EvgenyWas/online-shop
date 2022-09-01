import { InjectedCurrentCurrencyProps } from "../../hocs/types";
import { ProductPdpFragment } from "../../types/generated";
import { TChosenAttributeSet } from "../../types/types";

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
  chosenAttributes: TChosenAttributeSet[];
  productId: string;
};

export type TProductProps = {
  product: ProductPdpFragment
}