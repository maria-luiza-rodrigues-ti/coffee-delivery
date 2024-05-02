import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import {
  CoffeeCardContainer,
  CoffeeTagsContainer,
  CoffeeTags,
  CoffeeDetailsContainer,
  CoffeePriceContainer,
  CoffeePrice,
  CoffeeQuantity,
  CartButton,
} from "./styles";

import { CoffeeProps } from "..";

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
          <CoffeeQuantity>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>0</span>
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </CoffeeQuantity>
          <CartButton>
            <ShoppingCart size={22} weight="fill" color="#ffffff" />
          </CartButton>
        </div>
      </CoffeePriceContainer>
    </CoffeeCardContainer>
  );
}
