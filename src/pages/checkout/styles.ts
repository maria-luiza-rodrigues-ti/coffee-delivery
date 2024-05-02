import styled from "styled-components";

export const CheckoutContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto 5rem;
  padding: 0 1rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;

  @media  (min-width: 1200px) {
    margin: 0 auto 10rem;

    padding: 0;
  }
`

export const AddressAndPaymentContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media  (min-width: 1200px) {
    max-width: 40rem;
  }

`

export const FormTitle = styled.h2`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};

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

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: .875rem;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  position: relative;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: minmax(auto, 200px) auto minmax(auto, 60px);
    gap: 1rem .75rem;
  }
`

export const BaseInput = styled.input`
  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  padding: .75rem;

  font-size: .874rem;

  color: ${(props) => props.theme['base-text']};

  transition: all .2s;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus, &:focus-visible {
    outline-color: ${(props) => props.theme['yellow-dark']};
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

export const AddressComplementInput = styled(BaseInput)`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
`

export const OpcionalLabelContainer = styled.div`
  z-index: 10;

  position: absolute;
  top: 50%;
  right: -0.5rem;
  transform: translate(-50%, -50%);

  max-width: max-content;
  max-height: max-content;
  justify-self: end;

  @media (min-width: 1200px) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;

    position: relative;
    top: 0;
    right: 0;

    transform: translate(0, 0);
  }

  span {
    display: block;
    font-size: .75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};

    @media (min-width: 1200px) {
      position: absolute;
      z-index: 10;
      right: .75rem;
      top: .9375rem;
    }
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
  flex-direction: column;
  gap: .75rem;

  @media (min-width: 1200px) {
    flex-direction: row;
  }

  li {
    list-style: none;
    flex: 1;

    min-width: 11.25rem;
  }

  button {
    background: ${(props) => props.theme['base-button']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 6px;

    padding: .875rem;

    display: flex;
    align-items: center;
    gap: .75rem;

    width: 100%;

    transition: all .3s ease-in-out;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['purple-light']};
      border-color: ${(props) => props.theme['purple']};
    }
  }

  svg {
    fill: ${(props) => props.theme['purple']};
  }

  span {
    font-size: .75rem;
    text-transform: uppercase;

    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentResumeContainer = styled(AddressAndPaymentContainer)`
  width: 100%;

  @media  (min-width: 1200px) {
    max-width: 28rem;
  }
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
    font-size: .75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['base-text']};
  }
`

export const ProductPrice = styled.span`
  font-weight: 700;
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
    color: ${(props) => props.theme['base-text']};
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
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
  text-transform: uppercase;

  transition: all .3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`