import { MapPinLine } from "@phosphor-icons/react";

import {
  AddressAndPaymentContainer,
  FormTitle,
  FormContainer,
  AddressFormTitleContainer,
  InputsContainer,
  CEPInput,
  StreetInput,
  NumberInput,
  AddressComplementInput,
  OpcionalLabelContainer,
  NeighborhoodInput,
  CityInput,
  StateInput,
} from "./styles";

export function AddressForm() {
  return (
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
    </AddressAndPaymentContainer>
  );
}
