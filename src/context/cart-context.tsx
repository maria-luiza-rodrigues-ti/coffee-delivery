import { ReactNode, createContext, useState } from "react";
import { CoffeeProps } from "../pages/home";

export interface CartItem extends CoffeeProps {
  quantity: number;
}

interface ProductContextProps {
  cartItems: CartItem[];
  numberOfCartItems: number;
  addItemToCart: (product: CartItem) => void;
  incrementProductQuantity: (product: CartItem) => void;
  decrementProductQuantity: (product: CartItem) => void;
  removeItemFromCart: (product: CartItem) => void;
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
      setCartItems((state) => {
        return state.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });
      });
    } else {
      setCartItems([...cartItems, product]);
    }
  }

  const numberOfCartItems = cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  function incrementProductQuantity(product: CartItem) {
    setCartItems((state) => {
      return state.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    });
  }

  function decrementProductQuantity(product: CartItem) {
    setCartItems((state) => {
      return state.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });
    });
  }

  function removeItemFromCart(product: CartItem) {
    setCartItems((state) => {
      return state.filter((item) => {
        return item.id !== product.id;
      });
    });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        numberOfCartItems,
        incrementProductQuantity,
        decrementProductQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
