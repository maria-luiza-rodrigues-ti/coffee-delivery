import { Trash } from "@phosphor-icons/react";
import Product1 from "/assets/type_tradicional.png";

import {
  ProductCardContainer,
  ProductDetailsContainer,
  QuantityContainer,
  RemoveButton,
  ProductPrice,
} from "./styles";
import { Quantity } from "../../../../components/quantity";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductDetailsContainer>
        <img src={Product1} />
        <QuantityContainer>
          <h3>Expresso Tradicional</h3>
          <Quantity />
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
