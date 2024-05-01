import styled from "styled-components";

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  gap: 2rem;
`

export const AddressAndPaymentContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 40rem;
`

export const FormTitle = styled.h2`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;

    margin-bottom: 1rem;
`

export const FormContainer = styled.form`
  padding: 2.5rem;
  margin-bottom: .75rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;
`

export const AddressFormTitleContainer = styled.div`
  display: flex;
  gap: .5rem;

  margin-bottom: 2rem;

  svg {
    fill: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: .875rem;
    line-height: 130%;
  }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 200px) auto minmax(auto, 60px);
  gap: 1rem .75rem;
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: .75rem;

  font-size: .874rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CEPInput = styled(BaseInput)`
  grid-column: 1 / 2;
`

export const StreetInput = styled(BaseInput)`
  grid-column: 1 / 4;
  grid-row: 2 / 3;
`

export const NumberInput = styled(BaseInput)`
  grid-column: 1 / 2;
  grid-row: 3 / 4;
`

export const AddressComplementInputContainer = styled.div`
  
  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: .75rem;

  font-size: .874rem;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};

  grid-column: 2 / 4;
  grid-row: 3 / 4;

  display: flex;
  align-items: center;
  gap: 4px;

  input {
    background: transparent;
    border: none;

    width: 100%;
  }

  span {
    font-style: italic;
    font-size: .75rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
  }
`

export const NeighborhoodInput = styled(BaseInput)`
  grid-column: 1 / 2;
  grid-row: 4 / 5;
`

export const CityInput = styled(BaseInput)`
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`

export const StateInput = styled(BaseInput)`
  grid-column: 3 / 4;
  grid-row: 4 / 5;
`

export const PaymentFormTitleContainer = styled(AddressFormTitleContainer)`
    svg {
    fill: ${(props) => props.theme['purple']};
  }
`

export const PaymentOptionsContainer = styled.ul`
  display: flex;
  gap: .75rem;

  li {
    list-style: none;
  }

  button {
    background: ${(props) => props.theme['base-button']};

    border: none;
    border-radius: 6px;

    padding: 1rem;

    display: flex;
    align-items: center;
    gap: .75rem;
  }

  svg {
    fill: ${(props) => props.theme['purple']};
  }

  span {
    font-size: .75rem;
    line-height: 160%;
    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentResumeContainer = styled(AddressAndPaymentContainer)`
  max-width: 28rem;
`

export const ProductCardContainer = styled.li`
  list-style: none;

  display: flex;
  justify-content: space-between;

  padding: .25rem .5rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  margin-bottom: 1.5rem;
`

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }
`

export const QuantityContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    gap:.5rem;

    h3 {
    grid-column: 1 / 3;
    line-height: 130%;
    font-weight: 400;
  }
`

export const RemoveButton = styled.button`
  background-color: ${(props) => props.theme['base-button']};

  border: none;
  border-radius: 6px;

  display: flex;
  align-items: center;
  gap: 4px;

  padding: 0 .5rem;

  svg {
    fill: ${(props) => props.theme['purple']};
  }

  span {
    font-size: .75m;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProductPrice = styled.span`
  font-weight: 700;
  line-height: 130%;
`

export const ResumeContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: .75rem;

  li {
    list-style: none;

    display: flex;
    justify-content: space-between;
  }

  span {
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
  }
`

export const ConfirmOrderButton = styled.button`
  margin-top: 1.5rem;
  padding: .75rem .5rem;

  display: flex;
  justify-content: center;
  width: 100%;

  border: none;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow']};

  color: ${(props) => props.theme.white};
  font-size: .875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
`