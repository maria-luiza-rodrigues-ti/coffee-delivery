import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

import CoffeeImage from "/assets/coffee-image.png";

import { Header } from "../../components/header";
import {
  BackgroundImage,
  InfoIntroductionSection,
  IntroductionSection,
  ShoppingDetailsContainer,
} from "./styles";

export function Home() {
  return (
    <>
      <Header />
      <main>
        <BackgroundImage />
        <IntroductionSection>
          <InfoIntroductionSection>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <li>
                <ShoppingDetailsContainer backgroundColor="yellow-dark">
                  <ShoppingCart weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>

                <span>Compra simples e segura</span>
              </li>
              <li>
                <ShoppingDetailsContainer backgroundColor="base-text">
                  <Package weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <ShoppingDetailsContainer backgroundColor="yellow">
                  <Timer weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <ShoppingDetailsContainer backgroundColor="purple">
                  <Coffee weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </InfoIntroductionSection>

          <div>
            <img src={CoffeeImage} />
          </div>
        </IntroductionSection>

        <section>
          <h2>Nossos cafes</h2>
          <ul>
            <li>
              <img src="" />
              <span>Tradicional</span>
              <div>
                <h3>Expresso Tradicional</h3>
                <p>O tradicional cafe com o quarto do seu lanche</p>
              </div>
              <div>
                <span>R$ 9,90</span>
                <div>
                  <span>1</span>
                </div>
                <button>Carrinho</button>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
