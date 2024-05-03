import { ReactNode, createContext, useEffect, useState } from "react";
import { CoffeeProps } from "../pages/home";

export interface CartItem extends CoffeeProps {
  quantity: number;
  totalPrice: number;
}

interface ProductContextProps {
  cartItems: CartItem[];
  addItemToCart: (product: CartItem) => void;
  numberOfCartItems: number;
  incrementProductQuantity: (id: number) => void;
  decrementProductQuantity: (id: number) => void;
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

  const numberOfCartItems = cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  function incrementProductQuantity(id: number) {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(newCartItems);
  }

  function decrementProductQuantity(id: number) {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartItems(newCartItems);
  }

  useEffect(() => {
    const cartItemsLocalStorage = JSON.stringify(cartItems);

    localStorage.setItem(
      "@coffee-delivery:cart-items-1.0.0",
      cartItemsLocalStorage
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        numberOfCartItems,
        incrementProductQuantity,
        decrementProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
