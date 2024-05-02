import { ReactNode, createContext } from "react";
import { CoffeeProps } from "../pages/home";

interface ProductContextProps {
  product: CoffeeProps[];
  quantity: number;
}

export const ProductContext = createContext({} as ProductContextProps);

interface ProductContextProviderProps {
  children: ReactNode;
}

export function ProductsContextProvider({
  children,
}: ProductContextProviderProps) {
  return (
    <ProductContext.Provider
      value={{
        product: [],
        quantity: 1,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
