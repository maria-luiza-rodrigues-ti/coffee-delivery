import styled from "styled-components"

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