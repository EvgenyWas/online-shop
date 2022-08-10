import { TAttribute, TProduct } from "../../types/types"

export type TCartResultProps = {
    currentCurrency: string,
    cart: TProduct[]
};

export type TCartItemProps = TProduct;

export type TCartItemState = {
    chosenSwatch: TAttribute | null,
    chosenText: TAttribute | null
};