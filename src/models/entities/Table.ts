export type TableData<T> = {
    lines: T[],
}

export type DetailsItem = {
    id: number,
    icon: string,
    name: string,
    tradeId: string,
}
export type TableItem = {
    id: number,
    name: string,
    icon: string,
    levelRequired: number
    baseType: string
    links: number
    itemClass: number
    flavourText: string
    itemType: string
    chaosValue: number
    exaltedValue: number
    count: number
    detailsId: string
    listingCount: number
}
export type ItemTable = TableData<TableItem>


export type CurrencyItem = {
    "currencyTypeName": string,
    "pay": {
        "value": number,
    },
    "receive": {
        "value": number,
    },
    "chaosEquivalent": number,
    "detailsId": string,
}
export type CurrencyTable = {
    lines: CurrencyItem[],
    currencyDetails: DetailsItem[],
}

