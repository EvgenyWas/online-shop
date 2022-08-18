import { ProductPdpFragment } from "./generated";

export type TPrice = {
    amount: number,
    currency: {
        label: string,
        symbol: string
    }
}

export type TAttribute = {
    displayValue: string
    value: string,
    id: string
};

export type TProduct = {
    product: ProductPdpFragment,
    swatch: TAttribute | null,
    text: TAttribute | null,
    amount: number
};

export type TCart = {
    amount: number,
    order: TProduct[]
}

export type TManageAmountOperations = 'decrease' | 'increase';

export type TStorage = {
    cart: TCart,
    currentProductId: string
}