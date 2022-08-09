import { TAttribute } from "../../types/types";

export type TProductBarProps = {
    id: string,
};

export type TProductGalleryProps = {
    id: string,
};

export type TProductGalleryState = {
    gallery: string[],
    activePicture: string,
    inStock: boolean
};

export type TProductBarState = {
    product: any,
    chosenSwatch: TAttribute | null,
    chosenText: TAttribute | null,
    isAddedToCart: boolean,
    isReplaceToCart: boolean
};