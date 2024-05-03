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
  const { cartItems } = useCart();

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
              <span>R$ 29,70</span>
            </li>
            <li>
              <span>Entrego</span>
              <span>R$ 3,50</span>
            </li>
            <li>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </li>
          </ResumeContainer>
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </FormContainer>
      </OrderResumeContainer>
    </CheckoutContainer>
  );
}
