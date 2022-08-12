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
    product: any,
    swatch: TAttribute | null,
    text: TAttribute | null,
    amount: number
};

export type TCart = {
    amount: number,
    order: TProduct[]
}

export type TManageAmountOperations = 'decrease' | 'increase';