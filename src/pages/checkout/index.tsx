import { PaymentOptions } from "./components/payment-options";
import { AddressForm } from "./components/address-form";

import {
  CheckoutContainer,
  ConfirmOrderButton,
  OrderResumeContainer,
  ResumeContainer,
} from "./styles";

import { FormTitle, FormContainer } from "./components/address-form/styles";
import { ProductCard } from "./components/product-card";
import { useCart } from "../../hooks/useCart";

export function Checkout() {
  const { cartItems, productsTotalPrice, deliveryPrice, cartTotalPrice } =
    useCart();

  const productsTotalPriceFormatted = productsTotalPrice
    .toFixed(2)
    .replace(".", ",");
  const deliveryPriceFormatted = deliveryPrice.toFixed(2).replace(".", ",");
  const cartTotalPriceFormatted = cartTotalPrice.toFixed(2).replace(".", ",");

  return (
    <CheckoutContainer>
      <AddressForm />
      <PaymentOptions />

      <OrderResumeContainer>
        <FormTitle>Cafés selecionados</FormTitle>
        <FormContainer>
          <ul>
            {cartItems.map((item) => (
              <ProductCard key={item.id} cartProduct={item} />
            ))}
          </ul>
          <ResumeContainer>
            <li>
              <span>Total de itens</span>
              <span>R$ {productsTotalPriceFormatted}</span>
            </li>
            <li>
              <span>Entrega</span>
              <span>R$ {deliveryPriceFormatted}</span>
            </li>
            <li>
              <strong>Total</strong>
              <strong>R$ {cartTotalPriceFormatted}</strong>
            </li>
          </ResumeContainer>
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </FormContainer>
      </OrderResumeContainer>
    </CheckoutContainer>
  );
}
