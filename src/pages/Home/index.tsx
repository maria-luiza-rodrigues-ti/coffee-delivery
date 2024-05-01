import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCart,
  Timer,
} from "@phosphor-icons/react";

import CoffeeImage from "/assets/coffee-image.png";
import data from "../../../coffees.json";

import { Header } from "../../components/header";
import {
  BackgroundImage,
  CartButton,
  CoffeeCard,
  CoffeeDetailsContainer,
  CoffeePrice,
  CoffeePriceContainer,
  CoffeeQuantity,
  CoffeeTags,
  CoffeeTagsContainer,
  CoffeesList,
  CoffeesListContainer,
  ImageIntroSection,
  InfoIntroductionSection,
  IntroductionSection,
  ShoppingDetailsContainer,
} from "./styles";

interface Coffee {
  id: number;
  image: string;
  tags: string[];
  title: string;
  description: string;
  price: string;
}

export function Home() {
  const { coffees } = data;

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
                <ShoppingDetailsContainer background-color="yellow-dark">
                  <ShoppingCart weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>

                <span>Compra simples e segura</span>
              </li>
              <li>
                <ShoppingDetailsContainer background-color="base-text">
                  <Package weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <ShoppingDetailsContainer background-color="yellow">
                  <Timer weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <ShoppingDetailsContainer background-color="purple">
                  <Coffee weight="fill" color="#ffffff" />
                </ShoppingDetailsContainer>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </InfoIntroductionSection>

          <ImageIntroSection>
            <img src={CoffeeImage} />
          </ImageIntroSection>
        </IntroductionSection>

        <CoffeesListContainer>
          <h2>Nossos cafés</h2>
          <CoffeesList>
            {coffees.map((coffee: Coffee) => {
              return (
                <CoffeeCard key={coffee.id}>
                  <img src={coffee.image} />
                  <CoffeeTagsContainer>
                    {coffee.tags.map((tag) => {
                      return <CoffeeTags key={tag}>{tag}</CoffeeTags>;
                    })}
                  </CoffeeTagsContainer>

                  <CoffeeDetailsContainer>
                    <h3>{coffee.title}</h3>
                    <p>{coffee.description}</p>
                  </CoffeeDetailsContainer>
                  <CoffeePriceContainer>
                    <CoffeePrice>
                      R$ <span>{coffee.price}</span>
                    </CoffeePrice>
                    <div>
                      <CoffeeQuantity>
                        <button>
                          <Minus size={14} weight="bold" />
                        </button>
                        <span>0</span>
                        <button>
                          <Plus size={14} weight="bold" />
                        </button>
                      </CoffeeQuantity>
                      <CartButton>
                        <ShoppingCart size={22} weight="fill" color="#ffffff" />
                      </CartButton>
                    </div>
                  </CoffeePriceContainer>
                </CoffeeCard>
              );
            })}
          </CoffeesList>
        </CoffeesListContainer>
      </main>
    </>
  );
}
