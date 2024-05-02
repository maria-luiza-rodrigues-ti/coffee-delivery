import { createContext } from "react";
import { CoffeeProps } from "../pages/home";

interface ProductContextProps {
  products: CoffeeProps[];
}

export const ProductContext = createContext({} as ProductContextProps);

interface ProductContextProviderProps {
  children: React.ReactNode;
}

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
