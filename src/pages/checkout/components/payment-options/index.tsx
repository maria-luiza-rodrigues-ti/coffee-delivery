import { CreditCard, Bank, Money, CurrencyDollar } from "@phosphor-icons/react";
import { PaymentFormContainer, PaymentOptionsContainer } from "./styles";
import { PaymentFormTitleContainer } from "../../styles";

export function PaymentOptions() {
  return (
    <PaymentFormContainer>
      <PaymentFormTitleContainer>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentFormTitleContainer>
      <PaymentOptionsContainer>
        <li>
          <button>
            <CreditCard size={22} />
            <span>Cartão de crédito</span>
          </button>
        </li>
        <li>
          <button>
            <Bank size={22} />
            <span>Cartão de débito</span>
          </button>
        </li>
        <li>
          <button>
            <Money size={22} />
            <span>Dinheiro</span>
          </button>
        </li>
      </PaymentOptionsContainer>
    </PaymentFormContainer>
  );
}
