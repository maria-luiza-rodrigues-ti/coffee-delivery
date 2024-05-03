import { MouseEvent } from "react";

import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartItem } from "../../../../context/cart-context";
import { CoffeeQuantity } from "../../../../components/quantity/styles";

import {
  ProductCardContainer,
  ProductDetailsContainer,
  QuantityContainer,
  RemoveButton,
  ProductPrice,
} from "./styles";

import { useCart } from "../../../../hooks/useCart";

interface ProductCardProps {
  cartProduct: CartItem;
  key: number;
}

export function ProductCard({ cartProduct }: ProductCardProps) {
  const { incrementProductQuantity, decrementProductQuantity } = useCart();

  function handleDecrementProductQuantity(
    event: MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    decrementProductQuantity(cartProduct.id);
  }

  function handleIncrementProductQuantity(
    event: MouseEvent<HTMLButtonElement>
  ) {
    event.preventDefault();

    incrementProductQuantity(cartProduct.id);
  }

  return (
    <ProductCardContainer>
      <ProductDetailsContainer>
        <img src={cartProduct.image} />
        <QuantityContainer>
          <h3>{cartProduct.title}</h3>
          <CoffeeQuantity>
            <button onClick={handleDecrementProductQuantity}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{cartProduct.quantity}</span>
            <button onClick={handleIncrementProductQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeQuantity>
          <RemoveButton>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </QuantityContainer>
      </ProductDetailsContainer>
      <div>
        <ProductPrice>R$ 9,90</ProductPrice>
      </div>
    </ProductCardContainer>
  );
}
