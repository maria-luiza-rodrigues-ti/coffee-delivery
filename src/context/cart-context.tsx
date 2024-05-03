import { ReactNode, createContext, useState } from "react";
import { CoffeeProps } from "../pages/home";

interface CartItem extends CoffeeProps {
  quantity: number;
}

interface ProductContextProps {
  cartItems: CartItem[];
  addItemToCart: (product: CartItem) => void;
}

export const CartContext = createContext({} as ProductContextProps);

interface ProductContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ProductContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addItemToCart(product: CartItem) {
    const isProductAlreadyInTheCart = cartItems.find(
      (item) => item.id === product.id
    );

    if (isProductAlreadyInTheCart) {
      const newCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          };
        }
        return item;
      });

      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
