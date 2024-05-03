import { Minus, Plus } from "@phosphor-icons/react";
import { CoffeeQuantity } from "./styles";
import { useState } from "react";

export function Quantity() {
  const [productQuantity, setProductQuantity] = useState(1);

  function removeProductQuantity() {
    if (productQuantity === 0) return;

    setProductQuantity(productQuantity - 1);
  }
  function addProductQuantity() {
    setProductQuantity(productQuantity + 1);
  }

  return (
    <CoffeeQuantity>
      <button onClick={removeProductQuantity}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{productQuantity}</span>
      <button onClick={addProductQuantity}>
        <Plus size={14} weight="bold" />
      </button>
    </CoffeeQuantity>
  );
}
