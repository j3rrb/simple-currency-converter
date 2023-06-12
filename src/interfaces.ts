import { Dispatch, ReactNode, SetStateAction } from "react";
import { CURRENCIES_SIGNS } from "./enums";

export interface IMainContext {
    baseCurrency: keyof typeof CURRENCIES_SIGNS | null,
    setBaseCurrency: Dispatch<SetStateAction<keyof typeof CURRENCIES_SIGNS | null>>
    firstCurrency: keyof typeof CURRENCIES_SIGNS | null
    setFirstCurrency: Dispatch<SetStateAction<keyof typeof CURRENCIES_SIGNS | null>>
    secondCurrency: keyof typeof CURRENCIES_SIGNS | null
    setSecondCurrency: Dispatch<SetStateAction<keyof typeof CURRENCIES_SIGNS | null>>
    thirdCurrency: keyof typeof CURRENCIES_SIGNS | null
    setThirdCurrency: Dispatch<SetStateAction<keyof typeof CURRENCIES_SIGNS | null>>
}

export interface IMainContextProvider {
    children: ReactNode | ReactNode[]
}

export interface IConverter {
    from: keyof typeof CURRENCIES_SIGNS | null
    to: keyof typeof CURRENCIES_SIGNS | null
}
