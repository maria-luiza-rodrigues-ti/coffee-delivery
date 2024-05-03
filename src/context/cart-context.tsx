import { ReactNode, createContext, useState } from "react";
// import { CoffeeProps } from "../pages/home";

// interface CartItem extends CoffeeProps {
//   quantity: number;
// }

interface ProductContextProps {
  // cartItems: CartItem[];
  cartItemQuantity: number;
  incrementProductQuantity: (productQuantity: number) => void;
  decrementProductQuantity: (productQuantity: number) => void;
}

export const CartContext = createContext({} as ProductContextProps);

interface ProductContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ProductContextProviderProps) {
  // const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemQuantity, setCartItemQuantity] = useState(1);

  function incrementProductQuantity(productQuantity: number) {
    setCartItemQuantity(productQuantity + 1);
  }

  function decrementProductQuantity(productQuantity: number) {
    if (productQuantity === 0) return;

    setCartItemQuantity(productQuantity - 1);
  }

  return (
    <CartContext.Provider
      value={{
        /* cartItems, */
        cartItemQuantity,
        incrementProductQuantity,
        decrementProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
