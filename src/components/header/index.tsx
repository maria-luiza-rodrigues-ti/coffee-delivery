import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import Logo from "/assets/logo.svg";
import {
  HeaderContainer,
  LocationAndCartContainer,
  LocationContainer,
  CartButton,
} from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { numberOfCartItems } = useCart();

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

          {numberOfCartItems > 0 && (
            <div>
              <span>{numberOfCartItems}</span>
            </div>
          )}
        </CartButton>
      </LocationAndCartContainer>
    </HeaderContainer>
  );
}
