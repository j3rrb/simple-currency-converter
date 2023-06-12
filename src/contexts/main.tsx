import { createContext, useContext, useEffect, useState } from "react";
import { IMainContext, IMainContextProvider } from "../interfaces";
import { CURRENCIES_SIGNS } from "../enums";

export const MainContext = createContext({} as IMainContext);

export const useMainContext = () => useContext(MainContext);

export default function MainContextProvider({
  children,
}: IMainContextProvider) {
  const [baseCurrency, setBaseCurrency] = useState<
    keyof typeof CURRENCIES_SIGNS | null
  >(null);
  const [firstCurrency, setFirstCurrency] = useState<
    keyof typeof CURRENCIES_SIGNS | null
  >(null);
  const [secondCurrency, setSecondCurrency] = useState<
    keyof typeof CURRENCIES_SIGNS | null
  >(null);
  const [thirdCurrency, setThirdCurrency] = useState<
    keyof typeof CURRENCIES_SIGNS | null
  >(null);

  useEffect(() => {
    console.log({ baseCurrency, firstCurrency, secondCurrency, thirdCurrency });
    if (!baseCurrency) {
      setFirstCurrency(null);
      setSecondCurrency(null);
      setThirdCurrency(null);
    }
  }, [baseCurrency, firstCurrency, secondCurrency, thirdCurrency]);

  return (
    <MainContext.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        firstCurrency,
        setFirstCurrency,
        secondCurrency,
        setSecondCurrency,
        thirdCurrency,
        setThirdCurrency,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
