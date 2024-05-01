import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "/assets/logo.svg";
import {
  HeaderContainer,
  LocationAndCartContainer,
  LocationContainer,
  CartButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />

      <LocationAndCartContainer className="location-cart_container">
        <LocationContainer className="location_container">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </LocationContainer>
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </LocationAndCartContainer>
    </HeaderContainer>
  );
}
