import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  CoffeeCardContainer,
  CoffeeTagsContainer,
  CoffeeTags,
  CoffeeDetailsContainer,
  CoffeePriceContainer,
  CoffeePrice,
  CartButton,
} from "./styles";

import { CoffeeProps } from "../..";
import { CoffeeQuantity } from "../../../../components/quantity/styles";
import { useState } from "react";
import { useCart } from "../../../../hooks/useCart";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addItemToCart } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);

  function removeProductQuantity() {
    if (productQuantity === 0) return;

    setProductQuantity((state) => state - 1);
  }
  function addProductQuantity() {
    setProductQuantity((state) => state + 1);
  }

  function addProductToCart() {
    const newProductAddedToCart = {
      ...coffee,
      quantity: productQuantity,
      totalPrice: parseFloat(coffee.price.replace(",", ".")) * productQuantity,
    };

    addItemToCart(newProductAddedToCart);
    setProductQuantity(1);
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.image} />
      <CoffeeTagsContainer>
        {coffee.tags.map((tag) => {
          return <CoffeeTags key={tag}>{tag}</CoffeeTags>;
        })}
      </CoffeeTagsContainer>

      <CoffeeDetailsContainer>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
      </CoffeeDetailsContainer>
      <CoffeePriceContainer>
        <CoffeePrice>
          R$ <span>{coffee.price}</span>
        </CoffeePrice>
        <div>
          <CoffeeQuantity>
            <button onClick={removeProductQuantity}>
              <Minus size={14} weight="bold" />
            </button>
            <span>{productQuantity}</span>
            <button onClick={addProductQuantity}>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeQuantity>
          <CartButton onClick={addProductToCart}>
            <ShoppingCart size={22} weight="fill" color="#ffffff" />
          </CartButton>
        </div>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  );
}
