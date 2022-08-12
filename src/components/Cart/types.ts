import { TAttribute, TCart, TProduct } from "../../types/types"

export type TCartResultProps = {
    currentCurrency: string,
    cart: TCart
};

export type TCartItemProps = TProduct;

export type TGalleryProps = {
    gallery: string[],
    name: string
};

export type TGalleryState = {
    currentImageUrl: string,
    currentImageNumber: number
};