import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "@phosphor-icons/react";

export function Checkout() {
  return (
    <main>
      <section>
        <h2>Complete seu pedido</h2>
        <form>
          <div>
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div>
            <input type="number" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="number" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
        </form>

        <form>
          <div>
            <CurrencyDollar size={22} />
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <ul>
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
          </ul>
        </form>
      </section>
      <section>
        <h2>Cafés selecionados</h2>
        <div>
          <ul>
            <li>
              <img src="" />

              <div>
                <h3>Expresso Tradicional</h3>
                <div>
                  <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                  <button>
                    <Trash size={22} />
                    <span>Remover</span>
                  </button>
                </div>
                <span>R$ 9,90</span>
              </div>
            </li>
            <li>
              <img src="" />

              <div>
                <h3>Latte</h3>
                <div>
                  <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                  <button>
                    <Trash size={22} />
                    <span>Remover</span>
                  </button>
                </div>
                <span>R$ 19,80</span>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </li>
            <li>
              <span>Entrego</span>
              <span>R$ 3,50</span>
            </li>
            <li>
              <span>Total</span>
              <span>R$ 33,20</span>
            </li>
          </ul>
          <button>Confirmar pedido</button>
        </div>
      </section>
    </main>
  );
}
