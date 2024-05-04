import { ReactNode, createContext, useReducer } from "react";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [cartItems, dispatch] = useReducer((state: CartItem[], action: any) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const isProductAlreadyInTheCart = state.find(
          (item) => item.id === action.payload.product.id
        );

        if (isProductAlreadyInTheCart) {
          return state.map((item) => {
            if (item.id === action.payload.product.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.product.quantity,
              };
            }
            return item;
          });
        } else {
          return [...state, action.payload.product];
        }
      }

      case "INCREMENT_PRODUCT": {
        return state.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }

      case "DECREMENT_PRODUCT": {
        return state.map((item) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      }

      case "REMOVE_FROM_CART": {
        return state.filter((item) => item.id !== action.payload.product.id);
      }

      default: {
        return state;
      }
    }
  }, []);

  console.log(cartItems);

  function addItemToCart(product: CartItem) {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product,
      },
    });
  }

  const numberOfCartItems = cartItems.reduce((accumulator, item) => {
    return accumulator + item.quantity;
  }, 0);

  function incrementProductQuantity(product: CartItem) {
    dispatch({
      type: "INCREMENT_PRODUCT",
      payload: {
        product,
      },
    });
  }

  function decrementProductQuantity(product: CartItem) {
    dispatch({
      type: "DECREMENT_PRODUCT",
      payload: {
        product,
      },
    });
  }

  function removeItemFromCart(product: CartItem) {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        product,
      },
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
