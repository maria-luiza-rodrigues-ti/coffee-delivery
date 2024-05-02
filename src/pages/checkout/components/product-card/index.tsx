import { Minus, Plus, Trash } from "@phosphor-icons/react";
import Product1 from "/assets/type_tradicional.png";
import { CoffeeQuantity } from "../../../home/components/coffee-card";
import {
  ProductCardContainer,
  ProductDetailsContainer,
  QuantityContainer,
  RemoveButton,
  ProductPrice,
} from "./styles";

export function ProductCard() {
  return (
    <ProductCardContainer>
      <ProductDetailsContainer>
        <img src={Product1} />
        <QuantityContainer>
          <h3>Expresso Tradicional</h3>
          <CoffeeQuantity>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            <span>0</span>
            <button>
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
