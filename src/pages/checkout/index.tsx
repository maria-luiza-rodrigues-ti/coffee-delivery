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

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressForm />
      <PaymentOptions />

      <OrderResumeContainer>
        <FormTitle>Cafés selecionados</FormTitle>
        <FormContainer>
          <ul>
            <ProductCard />
            <ProductCard />
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
