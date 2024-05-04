import styled from "styled-components";

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

export const PaymentFormContainer = styled.form`
  padding: 2.5rem;
  margin-bottom: .75rem;

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;

  width: 100%;
  
`