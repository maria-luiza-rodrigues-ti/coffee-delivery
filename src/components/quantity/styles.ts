import styled from "styled-components";

export const CoffeeQuantity = styled.div`
  background-color: ${(props)=> props.theme['base-button']};
  border-radius: 6px;
  padding: .5rem;

  display: flex;
  align-items: center;
  gap:.5rem;

  button {
    border: none;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: .25rem 0;

    cursor: pointer;

    transition: all .3s ease-in-out;

    &:hover svg {
      fill: ${(props) => props.theme['purple-dark']};
    }
  }

  svg {
    fill: ${(props) => props.theme['purple']};
  }

  span {
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    
    color: ${(props) => props.theme['base-title']};
  }
`