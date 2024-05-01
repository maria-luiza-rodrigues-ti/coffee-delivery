import styled from "styled-components";

export const BackgroundImage = styled.div`
  background: url('/assets/background.png') no-repeat center;
  background-size: cover;
  backdrop-filter: blur(80px);

  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;`

export const IntroductionSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  width: 100%;
  max-width: 70rem;

  margin: 0 auto;
  padding: 5.75rem 0;

  position: relative;
`

export const InfoIntroductionSection = styled.div`
  display: flex;
  flex-direction: column;

  width: 52.5%;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};

    margin-bottom: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 4.125rem;
  }

  ul {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    gap: .75rem;

    min-width: 231px;
  }

  span {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

const BACKGROUND_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  'base-text': 'base-text',
  purple: 'purple'
} as const;

interface BackgroundColorProps {
  "background-color" : keyof typeof BACKGROUND_COLORS;
}

export const ShoppingDetailsContainer = styled.div<BackgroundColorProps>`
  padding: .5rem;

  border-radius: 50%;

  background: ${(props) => props.theme[BACKGROUND_COLORS[props['background-color']]]};

  display: flex;
  align-items: center;
`

export const CoffeesListContainer = styled.section`
  max-width: 70rem;
  margin: 0 auto;
  padding: 2.5rem 0 9.875rem;

  display: flex;
  flex-direction: column;
  gap: 3.375rem;


  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const CoffeesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`

export const CoffeeCard = styled.li`
  list-style: none;

  padding: 1.25rem;

  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 16rem;

  img {
    margin-top: -2.5rem;
  }
`

export const CoffeeTagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`

export const CoffeeTags = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: .25rem .5rem;
  margin-top: 0.75rem;

  background-color: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-dark']};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 130%;
  text-transform: uppercase;
`

export const CoffeeDetailsContainer = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 33px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: .875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};

    text-align: center;
  }
`

export const CoffeePriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap:.5rem;
  }
`

export const CoffeePrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: .875rem;
  font-weight: 400;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};

  span{
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
  }
`

export const CoffeeQuantity = styled.div`
  background-color: ${(props)=> props.theme['base-button']};
  border-radius: 6px;
  padding: .5rem;

  button {
    border: none;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: .25rem 0;

    cursor: pointer;

    transition: all .3s;

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
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }
`

export const CartButton = styled.button`
  border: none;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple']};

  display: flex;


  padding: .5rem;

  cursor: pointer;
  transition: all .3s;

  &:hover {
    background-color: ${(props) => props.theme['purple-dark']};
  }
`