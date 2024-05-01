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
  backgroundColor : keyof typeof BACKGROUND_COLORS;
}

export const ShoppingDetailsContainer = styled.div<BackgroundColorProps>`
  padding: .5rem;

  border-radius: 50%;

  background: ${(props) => props.theme[BACKGROUND_COLORS[props.backgroundColor]]}
`
