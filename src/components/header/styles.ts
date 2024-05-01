import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 0;

  max-width: 70rem;
  margin: 0 auto;
`

export const LocationAndCartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: .5rem;

  background: ${(props)=> props.theme["purple-light"]};
  border-radius: 6px; 

  svg {
    fill: ${(props) => props.theme["purple-dark"]};
  }

  span {
    color: ${(props) => props.theme["purple-dark"]};
  }
`

export const CartButton = styled.button`
  display: flex;
  padding: .5rem;

  background: ${(props) => props.theme["yellow-light"]};

  border: none;
  border-radius: 6px; 

  
  svg {
    fill: ${(props) => props.theme["yellow-dark"]};
  }
`