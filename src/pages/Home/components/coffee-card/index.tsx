import { ShoppingCart } from "@phosphor-icons/react";
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
import { Quantity } from "../../../../components/quantity";

interface CoffeeCardProps {
  coffee: CoffeeProps;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
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
          <Quantity />
          <CartButton>
            <ShoppingCart size={22} weight="fill" color="#ffffff" />
          </CartButton>
        </div>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  );
}
