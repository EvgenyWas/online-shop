import { TAttribute, TCart, TProduct } from "../../types/types"

export type TCartResultProps = {
    currentCurrency: string,
    cart: TCart
};

export type TCartItemProps = TProduct;

export type TCartItemState = {
    chosenSwatch: TAttribute | null,
    chosenText: TAttribute | null,
    update: boolean
};