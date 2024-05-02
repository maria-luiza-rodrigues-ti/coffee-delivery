import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "@phosphor-icons/react";

import Product1 from "/assets/type_tradicional.png";
// import Product2 from "/assets/type_tradicional.png";

import {
  AddressAndPaymentContainer,
  AddressComplementInput,
  AddressFormTitleContainer,
  CEPInput,
  CheckoutContainer,
  CityInput,
  ConfirmOrderButton,
  FormContainer,
  FormTitle,
  InputsContainer,
  NeighborhoodInput,
  NumberInput,
  OpcionalLabelContainer,
  PaymentFormTitleContainer,
  PaymentOptionsContainer,
  PaymentResumeContainer,
  ProductCardContainer,
  ProductDetailsContainer,
  ProductPrice,
  QuantityContainer,
  RemoveButton,
  ResumeContainer,
  StateInput,
  StreetInput,
} from "./styles";
import { CoffeeQuantity } from "../home/styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressAndPaymentContainer>
        <FormTitle>Complete seu pedido</FormTitle>
        <FormContainer>
          <AddressFormTitleContainer>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </AddressFormTitleContainer>

          <InputsContainer>
            <CEPInput type="number" placeholder="CEP" />
            <StreetInput type="text" placeholder="Rua" />
            <NumberInput type="number" placeholder="Número" />
            <AddressComplementInput type="text" placeholder="Complemento" />
            <OpcionalLabelContainer>
              <span>Opcional</span>
            </OpcionalLabelContainer>
            <NeighborhoodInput type="text" placeholder="Bairro" />
            <CityInput type="text" placeholder="Cidade" />
            <StateInput type="text" placeholder="UF" />
          </InputsContainer>
        </FormContainer>

        <FormContainer>
          <PaymentFormTitleContainer>
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </PaymentFormTitleContainer>

          <PaymentOptionsContainer>
            <li>
              <button>
                <CreditCard size={22} />
                <span>Cartão de crédito</span>
              </button>
            </li>
            <li>
              <button>
                <Bank size={22} />
                <span>Cartão de débito</span>
              </button>
            </li>
            <li>
              <button>
                <Money size={22} />
                <span>Dinheiro</span>
              </button>
            </li>
          </PaymentOptionsContainer>
        </FormContainer>
      </AddressAndPaymentContainer>

      <PaymentResumeContainer>
        <FormTitle>Cafés selecionados</FormTitle>
        <FormContainer>
          <ul>
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
      </PaymentResumeContainer>
    </CheckoutContainer>
  );
}
