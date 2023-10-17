import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { CheckoutContainer, Totalizers, CheckoutPlaceOrderContainer, PaymentsCard, CheckoutPaymentContainer, PaymentsCardList, HeaderForm, HeaderPaymentContainer, CheckoutFormContainer, CepInput, RuaInput, ComplementoInput, UFInput } from "./styles";
import { CoffeeCardCheckout } from '../../components/CoffeeCard'
import { PlaceOrderButton } from "../../components/Button";

export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutFormContainer>
                <h2>Complete seu pedido</h2>
                <HeaderForm>
                    <MapPinLine size={22}  />
                    <div><h3>Endereço de Entrega</h3>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                    </div>
                </HeaderForm>
                <form>
                    <CepInput type="text" placeholder="CEP" />
                    <RuaInput type="text" placeholder="Rua" />
                    <input type="text" placeholder="Número" />
                    <ComplementoInput type="text" placeholder="Complemento" />
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <UFInput type="text" placeholder="UF" />
                </form>
            </CheckoutFormContainer>
            <CheckoutPlaceOrderContainer>
                <h2>Cafés selecionados</h2>
                <CoffeeCardCheckout />
                <CoffeeCardCheckout />
                <Totalizers>
                    <section>
                        <span>Total de itens</span>
                        <p>R$ 29,70</p>
                    </section>
                    <section>
                        <p>Entrega</p>
                        <p>R$ 3,50</p>
                    </section>
                    <section>
                        <h3>Total</h3>
                        <h3>R$ 33,20</h3>
                    </section>
                    <PlaceOrderButton/>
                </Totalizers>
            </CheckoutPlaceOrderContainer>
            <CheckoutPaymentContainer>
                <HeaderPaymentContainer>
                    <CurrencyDollar size={22} />
                    <div>
                        <h3>Pagamento</h3>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                </HeaderPaymentContainer>
                <PaymentsCardList>
                    <PaymentsCard>
                        <CreditCard size={16} />
                        CARTÃO DE CRÉDITO
                    </PaymentsCard>
                    <PaymentsCard>
                        <Bank size={16} />
                        CARTÃO DE DÉBITO
                    </PaymentsCard>
                    <PaymentsCard>
                        <Money size={16} />
                        DINHEIRO
                    </PaymentsCard>
                </PaymentsCardList>
            </CheckoutPaymentContainer>
        </CheckoutContainer>
    )
}