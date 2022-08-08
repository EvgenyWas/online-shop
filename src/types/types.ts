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